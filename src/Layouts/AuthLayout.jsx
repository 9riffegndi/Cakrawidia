import { Children } from "react";

export default function AuthLayout({ children, className='', title, description }) {
    return(
        <div className={`flex flex-col  w-full items-center gap-5 justify-center min-h-screen ${className}`}>
            
            <div className="flex flex-col justify-center gap-4 items-center">
                <h1 className="text-center text-xl md:text-2xl font-extrabold">{title}</h1>
                <p className="text-center">{description}</p>
            </div>

            
            {children}

        </div>
    )
}