import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

// Components
import Form from "../../Components/Form";
import InputPost from "../../Components/InputPost";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

// Layouts
import AuthLayout from "../../Layouts/AuthLayout";

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
            setError("Email atau password yang anda masukan salah. Coba lagi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title={"Selamat datang Kembali :)"}
            description={"Masukan email dan password untuk Login"}>
        
            <Form
                onSubmit={handleLogin}
                className="flex flex-col gap-2 rounded  w-[400px] ">
                {error && (
                    <div role="alert" class="alert alert-error">
                        <span className="text-xs">{error}</span>
                    </div>
                )}

                <InputPost
                    label="Email"
                    placeholder={'Masukan email'}
                    type={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </InputPost>


                <InputPost
                    label={'Password'}
                    placeholder={'Masukan password'}
                    type={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </InputPost>

                <PrimaryButton
                    type="submit"
                    label={loading ? "Loading..." : "Masuk"}
                    className={'btn w-full'}>
                </PrimaryButton>
            </Form>
        </AuthLayout>
    );
};

export default Login;
