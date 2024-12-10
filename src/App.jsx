import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./Pages/Home";
import ViewQuestion from "./Pages/ViewQuestion";

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
                    path="/viewquestion/:id"
                    element={
                        <>
                            <Helmet>
                                <title>View Question - Cakrawidia</title>
                            </Helmet>
                            <ViewQuestion />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
