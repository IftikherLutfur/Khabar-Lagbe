import React from 'react';

const mblBankingUrl = [
  {
    name: "Bkash",
    logo: "https://example.com/bkash-logo.png",
    gateway_url: "https://www.bkash.com"
  },
  {
    name: "Nagad",
    logo: "https://example.com/nagad-logo.png",
    gateway_url: "https://www.nagad.com.bd"
  },
  {
    name: "Upay",
    logo: "https://example.com/upay-logo.png",
    gateway_url: "https://www.upay.com.bd"
  },
  {
    name: "Rocket",
    logo: "https://example.com/rocket-logo.png",
    gateway_url: "https://www.rocket.com.bd"
  },
  {
    name: "PayPal",
    logo: "https://example.com/paypal-logo.png",
    gateway_url: "https://www.paypal.com"
  }
];

const PaymentIntegration = () => {
  return (
    <div className="pt-20 flex flex-wrap gap-5 justify-center">
      {mblBankingUrl.map((gateway, index) => (
        <div
          key={index}
          className="border border-gray-300 p-4 w-48 rounded-lg text-center shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => window.open(gateway.gateway_url, '_blank')}
        >
          {/* Uncomment to use logos */}
          {/* <img
            src={gateway.logo}
            alt={gateway.name}
            className="w-24 h-auto mb-3"
          /> */}
          <h3 className="text-xl font-semibold">{gateway.name}</h3>
          <p className="text-sm mt-2">Click to pay with {gateway.name}</p>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">Payment Integration</h1>
      <PaymentIntegration />
    </div>
  );
};

export default Page;
