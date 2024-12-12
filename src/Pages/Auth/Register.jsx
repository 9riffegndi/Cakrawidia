import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

// Components
import Form from "../../Components/Form";
import InputPost from "../../Components/InputPost";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

// Layouts
import AuthLayout from "../../Layouts/AuthLayout";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setpassword_confirmation] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Pastikan nama field di body sesuai dengan yang diharapkan oleh API
            const response = await axios.post(
                "https://cakrawidia-4ae06d46343e.herokuapp.com/register",
                { 
                    name, 
                    email, 
                    password, 
                    password_confirmation
                }
            ); 
            // Simpan token di localStorage
            localStorage.setItem("authToken", response.data.token);
            // Arahkan ke halaman Home
            navigate("/");
        } catch (err) {
            // Cek error dari respons server
            if (err.response && err.response.data) {
                setError(err.response.data.message || "Coba lagi");
            } else {
                setError("Terjadi kesalahan, coba lagi");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title={"Gabung Cakrawidia"}
            description={"Buat akun untuk mendapatkan jawaban dari pertanyaanmu lebih cepat"}>
        
            <Form
                onSubmit={handleRegister}
                className="flex flex-col gap-2 rounded  w-[400px] ">
                
                {error && (
                    <div role="alert" className="alert alert-error">
                        <span className="text-xs">{error}</span>
                    </div>
                )}
                
                <InputPost
                    label="Username"
                    placeholder={'Masukan nama'}
                    type={'text'}
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Perbaikan: setName, bukan setEmail
                />

                <InputPost
                    label="Email"
                    placeholder={'Masukan email'}
                    type={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputPost
                    label={'Password'}
                    placeholder={'Masukan password'}
                    type={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <InputPost
                    label={'Konfirmasi Password'}
                    placeholder={'Masukan password'}
                    type={'password'}
                    value={password_confirmation}
                    onChange={(e) => setpassword_confirmation(e.target.value)} 
                />

                <PrimaryButton
                    type="submit"
                    label={loading ? "Loading..." : "Daftar"}
                    className={'btn w-full'}>
                </PrimaryButton>
            </Form>
        </AuthLayout>
    );
};

export default Register;
