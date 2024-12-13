
import { Link } from "react-router-dom"


export default function ApplicationLogo({ className='' }) {
    return (
        <div  className={`md:flex hidden items-center ${className}`}>
            <Link to="/">
                <img className={`w-[50px] ${className}`}  src="/Assets/img/logo.png" alt="Logo" />
            </Link>
            <p className="font-extrabold text-xl">Cakrawidia</p>
        </div>
    )
}
