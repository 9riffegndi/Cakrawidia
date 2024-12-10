import ModalQuestions from "./ModalQuestions"
export default function Hero() {
    return (
        <>
            <div className="min-h-[300px] flex flex-col gap-10 p-2 items-center justify-center">
                <h1 className=" text-center  xs:text-4xl  md:text-5xl    font-extrabold">Punya Pertanyaan?</h1>   
                <ModalQuestions />
            </div> 
        </>
    )
    
}