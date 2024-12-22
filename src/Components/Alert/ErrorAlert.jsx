import React, { useState, useEffect } from "react";

export default function ErrorAlert({ text = '' }) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 5000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) {
        return null; // Do not render anything if the alert is closed
    }

    return (
        <div
            role="alert"
            className="fixed w-1/2 top-5 left-1/2 transform -translate-x-1/2 alert alert-error flex items-center space-x-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>{text}</span>
        </div>
    );
}
