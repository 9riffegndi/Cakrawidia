
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";

import { useFetchMe } from "../Hooks/useFecthMe";
import { useDeleteAcc } from "../Hooks/useDeleteAcc";

import Form from '../Components/Form';
import InputPost from '../Components/InputPost';
import PrimaryButton from '../Components/Buttons/PrimaryButton';

import MainLayout from '../Layouts/MainLayout';
import Footer from '../Partials/Footer';

import dayjs from 'dayjs';
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import id from 'dayjs/locale/id';
import ProfileMeLoading from '../Components/Loading/Pages/ProfileMeLoading';
import BreadCrumbs from '../Components/BreadCrumbs';
dayjs.extend(relativeTime);
dayjs.locale(id);

export default function ProfileMe() {
    const authToken = localStorage.getItem("authToken");
    const { deleteAcc } = useDeleteAcc(authToken);
    const { user, error } = useFetchMe(authToken);
    const { isLoading } = useFetchMe(authToken);
    const navigate = useNavigate();

    // State to hold password for deletion
    const [password, setPassword] = useState("");

    const handleDeleteAcc = async (event) => {
        event.preventDefault(); // Prevent the default form submit behavior
        try {
            await deleteAcc(password); // Pass password to deleteAcc hook
            navigate("/"); // Redirect after account deletion
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("Failed to delete account. Please try again.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    };

    if (error) {
        return navigate("/");
    }

    if (isLoading) {
        return <ProfileMeLoading />;
    }

    if (!user) {
        return navigate("/");
    }

    return (
        <>
            <Helmet>
                <title>{user.username} Profile</title>
            </Helmet>

            <MainLayout className='jutify-center items-center'>
                <BreadCrumbs />
                <div
                    style={{
                        backgroundImage: `url("/Assets/Img/ooorganize.svg")`,
                    }}
                    className="flex flex-col md:flex-row justify-center items-center p-2 gap-3 w-full min-h-[170px]"
                >
                    <p className="btn btn-circle text-4xl btn-neutral text-primary w-[150px] h-[150px]">
                        {user.username[0].toUpperCase()}
                    </p>
                    <div className="flex font-bold flex-col items-center md:items-start">
                        <p>ID: {user.id}</p>
                        <p className="text-2xl">{user.username}</p>
                    </div>
                </div>

                <div className="w-full mt-4 flex justify-center grow p-2 min-h-[500px]">
                    <div className="flex flex-col gap-4 justify-center items-center w-[95%] md:w-[50%] h-full">
                        <p className='font-bold text-2xl'> Hallo {user.username}</p>
                        <div className="flex w-full justify-between items-center">
                            <li className='min-h-[80px] justify-center grow flex items-center flex-col'>
                                <p>Poin</p>
                                <p className='font-bold'>{user.points}</p>
                            </li>
                            <span>|</span>
                            <li className='min-h-[80px] justify-center grow flex items-center flex-col'>
                                <p>Role</p>
                                <p className='font-bold'>{user.role}</p>
                            </li>
                            <span>|</span>
                            <li className='min-h-[80px] justify-center grow flex items-center flex-col'>
                                <p>ID USERS</p>
                                <p className='font-bold'>{user.id}</p>
                            </li>
                        </div>

                        <div className="flex flex-col border-t border-secondary justify-center gap-2 items-start w-full">
                            <p>Email: <span className='font-bold'>{user.email}</span></p>
                            <p>Bergabung pada: <span className='font-bold'>{dayjs(user.created_at).format('YYYY-MMMM-DD')}</span></p>
                        </div>

                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div
                                className="flex justify-center items-center collapse-title bg-neutral rounded-xl text-primary font-bold text-center peer-checked:rounded-b-none peer-checked:bg-secondary peer-checked:text-secondary-content">
                                Edit Profil
                            </div>
                            <div
                                className="collapse-content mb-3 rounded-b w-full flex peer-checked:border border-secondary text-primary-content peer-checked:text-secondary-content">
                                <Form classname='flex w-full'>
                                    <InputPost
                                        label={'Masukkan Username baru'}
                                        placeholder={'Username'}
                                        type={'text'}
                                        classname='w-full text-secondary'
                                    />
                                    <InputPost
                                        label={'Masukkan Email baru'}
                                        type={'email'}
                                        placeholder={'Email'}
                                        classname='w-full text-secondary'
                                    />
                                    <InputPost
                                        label={'Verifikasi Password'}
                                        type={'password'}
                                        placeholder='Password'
                                        classname='w-full text-secondary'
                                    />
                                    <PrimaryButton
                                        label={'Update Profile'}
                                        type={'submit'}
                                        className='w-full btn btn-neutral text-primary'
                                    />
                                </Form>
                            </div>
                        </div>

                        <PrimaryButton
                            label={'Logout'}
                            className='w-full rounded-xl btn-lg btn btn-neutral text-primary'
                            onClick={handleLogout}
                        />

                        {/* Delete Account Section */}
                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div
                                className="flex justify-center items-center collapse-title bg-error rounded-xl text-primary font-bold text-center peer-checked:rounded-b-none peer-checked:bg-secondary peer-checked:text-secondary-content">
                                Hapus Akun
                            </div>
                            <div
                                className="collapse-content mb-3 rounded-b w-full flex peer-checked:border border-secondary text-primary-content peer-checked:text-secondary-content">
                                <Form
                                    classname='flex w-full'
                                    onSubmit={handleDeleteAcc}
                                >
                                    <InputPost
                                        label={'Verifikasi Password'}
                                        type={'password'}
                                        placeholder={'Password'}
                                        classname='w-full text-secondary'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <PrimaryButton
                                        label={'Hapus Akun'}
                                        type={'submit'}
                                        className='w-full btn btn-error text-primary'
                                    />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>

            <Footer />
        </>
    );
}