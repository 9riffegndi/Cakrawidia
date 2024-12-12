import { Children } from "react"

export default function Form({children ,onSubmit ='', classname=''}) {
    return(
        <form
            className={`flex flex-col gap-5  w-[95%]  md:w-[60%] ${classname}`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}