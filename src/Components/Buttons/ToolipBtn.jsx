import LabelButton from "./LabelButton"


export default function ToolipBtn() {
    return (
        <div className=" fixed bottom-10 right-5 tooltip tooltip-open tooltip-left flex md:hidden"  data-tip="Kirim pertanyaan">
            <LabelButton 
                src="https://img.icons8.com/?size=100&id=Li1YuxryCXFK&format=png&color=FFFFFF"
                htmlFor="my_modal_6"
                className="btn btn-md btn-circle hid" 
                >
            </LabelButton>
        </div>
    )
}