export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center bg-secondary gap-2 p-10">
            <aside className="flex items-center p-2 rounded-full bg-primary">
                <img className="w-16" src="/Assets/Img/logo.png" alt="Logo" />
                <p className="font-extrabold text-2xl ">Cakrawidia</p>
            </aside>
            <a className="text-primary link link-hover" href="#">Team Profile</a>
            <p className="text-primary  font-bold">Copyright ©2024 - All right reserved</p>
    </footer>
    );
}