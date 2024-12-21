import ModalQuestions from "../Questions/ModalQuestions";
export default function Hero() {
    return (
        <>
            <div className=" w-full rounded-t-xl min-h-[300px] flex flex-col gap-10 p-2 items-center justify-center">
                <h1 className=" text-center xs:text-4xl  md:text-5xl    font-extrabold">Bahas apa hari ini ?</h1>   
                <ModalQuestions />
            </div> 
        </>
    )
    
}