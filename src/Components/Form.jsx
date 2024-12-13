import { Children } from "react"

export default function Form({children ,onSubmit ='', classname=''}) {
    return(
        <form
            className={`flex flex-col gap-2 rounded-md  w-[50%]  md:w-[24%] ${classname}`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}