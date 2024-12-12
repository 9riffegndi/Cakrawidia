import { Children } from "react";

export default function AuthLayout({ children, title, description }) {
    return(
        <div className="flex flex-col w-full p-5 items-center gap-5 justify-center min-h-screen">
            
            <div className="flex flex-col justify-center gap-4 items-center">
                <h1 className="text-center text-2xl md:text-4xl font-extrabold">{title}</h1>
                <p className="text-xl text-center">{description}</p>
            </div>

            
            {children}

        </div>
    )
}