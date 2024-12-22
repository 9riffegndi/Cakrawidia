import ModalQuestions from "../Questions/ModalQuestions";
export default function Hero() {
    return (
        <>
            <div className=" w-full rounded-t-xl min-h-[300px] flex flex-col gap-10 p-2 items-center justify-center">
                <h1 className=" text-center text-[1.7rem] md:text-[2.1rem] font-extrabold">Bahas apa hari ini ?</h1>   
                <ModalQuestions />
            </div> 
        </>
    )
    
}