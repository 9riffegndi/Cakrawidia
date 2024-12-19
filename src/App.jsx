import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// vercel analytics
import { Analytics } from "@vercel/analytics/react"

// Helmet
import { Helmet } from "react-helmet";

// Pages
import Home from "./Pages/Home";
import ViewQuestion from "./Pages/ViewQuestion";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ProfileMe from "./Pages/ProfileMe";


const App = () => {
    return (
        <Router>
            <Analytics />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Helmet>
                                <title>Home - Cakrawidia</title>
                            </Helmet>
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/ViewQuestion/:id"
                    element={
                            <>
                                <Helmet>
                                    <title>View Question - Cakrawidia</title>
                                </Helmet>
                                <ViewQuestion />
                            </>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <>
                            <Helmet>
                                <title>Login - Cakrawidia</title>
                            </Helmet>
                            <Login />
                        </>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <>
                            <Helmet>
                                <title>Login - Cakrawidia</title>
                            </Helmet>
                            <Register />
                        </>
                    }
                />

                <Route
                path="/profileMe"
                element={
                    <>
                    <Helmet>
                        <title>Profile - Cakrawidia</title>
                    </Helmet>
                    <ProfileMe />
                    
                    </>
                    
                }
                />
            </Routes>
        </Router>
    );
};

export default App;
