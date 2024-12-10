
import { Children } from "react";

export default function MainLayout({ children }) {
    
    return(
        <div className="flex flex-col justify-between items-start min-h-screen">
                {children}
        </div>
    )
}