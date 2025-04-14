"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Corrected useRouter import
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from "antd";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const SignUp = () => {
  const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
  const image_hosting = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const router = useRouter();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [form] = Form.useForm();

  // Upload image to imgbb
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

  // Handle registration
  const handleRegister = async (values) => {
    if (!profilePhoto) {
      toast.error("Please upload a profile image.");
      return;
    }

    try {
      const profilePhotoUrl = await uploadImageToImgbb(profilePhoto);

      const newUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        image: profilePhotoUrl,
        type: "user",
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_WEB_URL || process.env.NEXT_PUBLIC_DEPLOY_URL}/api/auth/signup/new-user`,
        newUser
      );

      if (res.status === 201) {
        toast.success("Registration successful!");
        form.resetFields();
        setProfilePhoto(null);
        router.push("/"); // Redirect to home page
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08252b] px-4 py-10">
      <Toaster />
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-indigo-800">Create Account</h1>

        <Form
          {...formItemLayout}
          form={form}
          style={{ maxWidth: 600 }}
          initialValues={{ variant: "filled" }}
          onFinish={handleRegister}
        >
          {/* <Form.Item label="Form variant" name="variant">
            <Segmented options={["outlined", "filled", "borderless", "underlined"]} />
          </Form.Item> */}

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {/* Profile Image Upload */}
          <Form.Item
            label="Profile Image"
            required
            rules={[{ required: true, message: "Please upload your profile image!" }]}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePhoto(e.target.files[0])}
            />
          </Form.Item>

          {/* Additional Ant Design form fields */}
          {/* <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item> */}

          {/* <Form.Item
            label="Range Picker"
            name="dateRange"
            rules={[{ required: true, message: "Please select a date range!" }]}
          > */}
            {/* <RangePicker /> */}
          {/* </Form.Item> */}

          {/* <Form.Item label="Select Country" name="country" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="us">United States</Select.Option>
              <Select.Option value="ca">Canada</Select.Option>
              <Select.Option value="in">India</Select.Option>
            </Select>
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-indigo-300"></div>
          <p className="px-3 text-sm text-indigo-600">Or sign up with</p>
          <div className="flex-1 h-px bg-indigo-300"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300">
            <FaGoogle className="text-red-500 w-5 h-5" />
          </button>
          <button className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300">
            <FaTwitter className="text-blue-400 w-5 h-5" />
          </button>
          <button className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300">
            <FaGithub className="text-gray-800 w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-center text-indigo-600">
          Already have an account?
          <a href="/api/auth/signin" className="text-indigo-800 font-semibold hover:underline ml-1">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
