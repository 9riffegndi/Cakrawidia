
import { Link } from "react-router-dom"


export default function ApplicationLogo() {
    return (
        <div className="md:flex hidden items-center">
            <Link to="/">
                <img className="w-[50px]" src="/assets/img/logo.png" alt="Logo" />
            </Link>
            <p className="font-extrabold text-xl">Cakrawidia</p>
        </div>
    )
}
