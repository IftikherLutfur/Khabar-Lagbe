"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Form, Input, Button, Row, Col, message } from "antd";
import axios from "axios";

const AddFood = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [ingredients, setIngredients] = useState("");

  const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
  const image_hosting = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // Function to upload image to imgbb
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

  // Handle form submission
  const onFinish = async (values) => {
    try {
      if (!profilePhoto) {
        message.error("Please upload a profile image.");
        return;
      }

      // Upload image first
      const uploadedImageUrl = await uploadImageToImgbb(profilePhoto);

      // Convert the ingredients string into an array
      const ingredientsArray = ingredients.split(",").map((item) => item.trim());

      const foodData = {
        name: values.name,
        price: Number(values.price), // Ensure price is stored as a number
        category: values.category,
        description: values.description,
        image: uploadedImageUrl, // Store uploaded image URL
        ingredients: ingredientsArray, // Store ingredients as an array
      };

      // Send data to backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/foods`,
        foodData
      );

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

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setImagePreview(URL.createObjectURL(file)); // Preview image
    }
  };

  return (
    <div className="flex pt-20 bg-zinc-900 min-h-screen">
      <Sidebar />
      <div className="w-full max-w-lg mx-auto px-6 pt-5 mb-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-black text-center my-2 text-2xl font-bold">
          Add a Food Item
        </h1>
        <Form name="food-form" layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter the name!" }]}
              >
                <Input placeholder="Enter food name" />
              </Form.Item>
            </Col>

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

          {/* Ingredients Input */}
          <Form.Item
            label="Ingredients"
            name="ingredients"
            rules={[{ required: true, message: "Please enter ingredients!" }]}
          >
            <Input
              placeholder="Enter ingredients separated by commas"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Form.Item>

          {/* Image Upload */}
          <Form.Item label="Profile Image" required>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-32 h-32 rounded-lg border border-gray-300"
              />
            )}
          </Form.Item>

          <Row gutter={16}>
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
