import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./Pages/Home";
import ViewQuestion from "./Pages/ViewQuestion";
import Login from "./Pages/Auth/Login";

const App = () => {
    return (
        <Router>
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
            </Routes>
        </Router>
    );
};

export default App;
