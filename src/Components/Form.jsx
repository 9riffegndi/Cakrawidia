import { Children } from "react"

export default function Form({children ,onSubmit ='', className=''}) {
    return(
        <form
            className={`flex flex-col gap-2 w-full ${className}`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}