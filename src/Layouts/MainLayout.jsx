
import { Children } from "react";

export default function MainLayout({ children, className='' }) {
    
    return(
        <div className={`flex flex-col justify-between items-start min-h-screen ${className}`}>
                {children}
        </div>
    )
}