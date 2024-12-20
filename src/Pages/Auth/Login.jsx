import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
    const [rememberMe, setRememberMe] = useState(true);

    const navigate = useNavigate();

    // Cek token saat komponen pertama kali di-render
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            // Jika token ditemukan, redirect ke halaman utama
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Email dan password wajib diisi.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                "https://cakrawidia-4ae06d46343e.herokuapp.com/login",
                { email, password }
            );

            // Simpan token di localStorage
            const token = localStorage.setItem("authToken", response.data.token);

            // Simpan email dan password jika rememberMe aktif
            if (rememberMe) {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userPassword", password);
            } else {
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userPassword");
            }
            // Arahkan ke halaman Home
            navigate("/");

            if(token !== null){
                console.log(token);
            }

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Email atau password yang anda masukan salah. Coba lagi");
            }
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        try {
            const savedEmail = localStorage.getItem("userEmail");
            const savedPassword = localStorage.getItem("userPassword");

            if (savedEmail) setEmail(savedEmail);
            if (savedPassword) setPassword(savedPassword);
        } catch (err) {
            console.error("Gagal mengambil data dari localStorage:", err);
        }
    }, []);

    return (

        <AuthLayout
            title={"Selamat datang Kembali :)"}
            description={"Masukan email dan password untuk Login"}>

            <Form onSubmit={handleLogin} className=" flex flex-col gap-2 rounded w-[50%]  md:w-[24%]">
                {error && (
                    <div role="alert" className="alert alert-error">
                        <span className="text-xs">{error}</span>
                    </div>
                )}

                <InputPost
                    label="Email"
                    placeholder={"Masukan email"}
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputPost
                    label={"Password"}
                    placeholder={"Masukan password"}
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <PrimaryButton
                    type="submit"
                    label={loading ? "Loading..." : "Masuk"}
                    className={"btn w-full"}
                />

                <div className="flex justify-between  text-sm items-center gap-1">
                    <div className="form-control">
                            <label className="label cursor-pointer gap-1 flex items-center ">
                                <span className="font-bold text-xs">Ingat saya</span>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="checkbox checkbox-xs"
                                />
                            </label>
                    </div>


                    <Link to="/register" className="text-xs  flex  justify-between items-center">
                        <span className="hidden lg:block"> Belum punya akun?</span> <span className="link font-bold"> Daftar</span>
                    </Link>
                </div>
            </Form>
        </AuthLayout>
    );
};

export default Login;
