import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";


import PrimaryButton from "../../Components/Buttons/PrimaryButton";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post(
                "https://cakrawidia-4ae06d46343e.herokuapp.com/login",
                { email, password }
            );

            // Simpan token di localStorage
            localStorage.setItem("authToken", response.data.token);

            // Arahkan ke halaman Home
            navigate("/");
        } catch (err) {
            setError("Invalid email or password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                {error && (
                    <div className="text-red-500 text-sm mb-4" role="alert">
                        {error}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>
                <PrimaryButton
                    type="submit"
                    label={loading ? "Logging in..." : "Login"}
                    className={'btn w-full'}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </PrimaryButton>
            </form>
        </div>
    );
};

export default Login;
