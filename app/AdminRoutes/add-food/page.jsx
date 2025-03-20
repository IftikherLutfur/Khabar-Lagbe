"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Form, Input, Button, Upload, Row, Col, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const uploadImageToImgbb = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axios.post(image_hosting, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data.display_url; // Return uploaded image URL
  } catch (error) {
    console.error("Image upload failed:", error);
    throw new Error("Failed to upload image. Please try again.");
  }
};

const AddFood = () => {
  const [imageUrl, setImageUrl] = useState(null);

  // Form submit handler
  const onFinish = async (values) => {
    try {
        // Upload image if not uploaded already
        let uploadedImageUrl = imageUrl;
        if (values.image && values.image[0]?.originFileObj) {
            uploadedImageUrl = await uploadImageToImgbb(values.image[0]?.originFileObj);
        }

        const foodData = {
            name: values.name,
            price: values.price,
            category: values.category,
            description: values.description,
            // image: uploadedImageUrl,  // Use the uploaded image URL
        };

        // Send POST request to the backend
        const response = await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/api/foods`, foodData);
        console.log(response);  // Log the response from the backend

        if (response.status === 200) {
            message.success(response.data.message);
        } else {
            message.error(response.data.message || "Something went wrong!");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        message.error("Failed to submit form!");
    }
  };

  return (
    <div className="flex pt-20 bg-zinc-900 min-h-screen">
      <Sidebar />
      <div className="w-full max-w-lg mx-auto px-6 pt-5 mb-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-black text-center my-2 text-2xl font-bold">
          Add a Food Item
        </h1>
        <Form
          name="food-form"
          layout="vertical"
          onFinish={onFinish} // Handle form submission
        >
          <Row gutter={16}>
            {/* Name */}
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter the name!" }]}
              >
                <Input placeholder="Enter food name" />
              </Form.Item>
            </Col>

            {/* Price */}
            <Col span={12}>
              <Form.Item
                label="Price (TK)"
                name="price"
                rules={[{ required: true, message: "Please enter the price!" }]}
              >
                <Input placeholder="Enter price in TK" type="number" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            {/* Category */}
            <Col span={12}>
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: "Please enter the category!" }]}
              >
                <Input placeholder="Enter category (e.g., Breakfast, Lunch, Dinner)" />
              </Form.Item>
            </Col>
          </Row>

          {/* Image Upload */}
          <Form.Item
            label="Upload Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
            rules={[{ required: true, message: "Please upload an image!" }]}
          >
            <Upload beforeUpload={() => false} listType="picture" onChange={(info) => setImageUrl(info.fileList[0]?.originFileObj)}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Row gutter={16}>
            {/* Description */}
            <Col span={24}>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: "Please enter a description!" }]}
              >
                <Input.TextArea rows={4} placeholder="Enter food description" />
              </Form.Item>
            </Col>
          </Row>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddFood;
