// src/components/Register.tsx
import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import { backendUrl } from "../assets/BackendUtils";

const Register: React.FC = () => {
    const { loginUser } = useUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState<File | null>(null);

    const navigate = useNavigate();


    let url = `${backendUrl}/register`;



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        if (profilePic) formData.append("profilePic", profilePic);

        try {
            const { data } = await axios.post(url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            loginUser(data.user, data.token);
            navigate('/login');
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                            onChange={(e) => e.target.files && setProfilePic(e.target.files[0])}
                            required
                        />
                    </div>
                    <div>
                        <p>Already registed click to
                            <NavLink to="/login">
                                <button className="m-1 text-blue-700">Login</button>
                            </NavLink></p>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all duration-300 ease-in-out"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
