"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Button, Form, Input, Divider } from "antd";
// import 'antd/dist/antd.css'; // Ant Design styles


const CustomLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (values) => {
        const { email, password } = values;
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            toast.error(res.error);
        } else {
            toast.success("Login successful!");
            router.push("/");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#08252b] px-4 py-10">
            <Toaster />
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold text-center text-indigo-800">Log In</h1>

                <Form
                    onFinish={handleSubmit}
                    layout="vertical"
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
                        >
                            Log In
                        </Button>
                    </Form.Item>
                </Form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px bg-indigo-300"></div>
                    <p className="px-3 text-sm text-indigo-600">Or log in with</p>
                    <div className="flex-1 h-px bg-indigo-300"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => signIn("google")}
                        className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300"
                    >
                        <FaGoogle className="text-red-500 w-5 h-5" />
                    </button>
                    <button
                        onClick={() => signIn("facebook")}
                        className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300"
                    >
                        <FaFacebook className="text-blue-500 w-5 h-5" />
                    </button>
                </div>

                <p className="text-sm text-center text-indigo-600">
                    Don't have an account?
                    <a href="/api/auth/signup" className="text-indigo-800 font-semibold hover:underline ml-1">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default CustomLogin;
