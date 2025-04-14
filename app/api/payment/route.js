import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; // For generating unique transaction IDs

const store_id = process.env.NEXT_PUBLIC_SSLCOMMERZ_ID; // SSLCommerz Store ID
const store_passwd = process.env.NEXT_PUBLIC_SSLCOMMERZ_PASSWORD; // SSLCommerz Store Password
const is_live = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'; // Check environment variable for production

export const POST = async (req) => {
  try {
    // Extract totalPrice and customer details from the request body
    const { totalPrice} = await req.json();
    const transactionId = uuidv4();

    // Ensure all required fields are provided
    if (!totalPrice) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Construct the data for the transaction
    const requestData = {
      store_id: store_id,
      store_passwd: store_passwd,
      total_amount: totalPrice,
      currency: "BDT", // Bangladesh Taka (BDT)
      tran_id: transactionId, // Unique transaction ID
      success_url: `${process.env.NEXT_PUBLIC_WEB_URL}/api/success?tran_id=${transactionId}`, // Success URL
      fail_url: `${process.env.NEXT_PUBLIC_WEB_URL}/api/fail?tran_id=${transactionId}`, // Fail URL
      cancel_url: `${process.env.NEXT_PUBLIC_WEB_URL}/api/cancel?tran_id=${transactionId}`, // Cancel URL
      shipping_method: "Courier", // Shipping method
      product_name: 'productName', // Product Name from frontend
      product_category: "General", // You can customize this
      product_profile: "general", // Product Profile
      cus_name:' customerDetails.name', // Customer Name
      cus_email: "customerDetails.email", // Customer Email
      cus_add1: "customerDetails.address1", // Customer Address Line 1
      cus_phone: "customerDetails", // Customer Phone
      cus_city: "customerDetails", // Customer City
    };

    // Send the request to SSLCommerz API to initiate the payment
    const response = await fetch(is_live ? 'https://secure.sslcommerz.com/gwprocess/v4/api.php' : 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
      method: 'POST',
      body: new URLSearchParams(requestData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const dt = await response.json();
    console.log("SSLCommerz Response:", dt); // Log full response to debug

    // Check if mobile banking is available in the response
    const mobileBankingURL = dt?.gw?.mobilebanking;
    if (mobileBankingURL) {
      return NextResponse.json({ url: mobileBankingURL }, { status: 200 });
    } else {
      console.error("Mobile Banking payment gateway URL not found:", dt);
      return NextResponse.json({ message: "Mobile Banking Gateway URL not found", details: dt }, { status: 500 });
    }

  } catch (error) {
    console.error("Error occurred while initiating payment:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};
