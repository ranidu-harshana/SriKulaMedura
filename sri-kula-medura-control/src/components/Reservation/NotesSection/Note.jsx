import NoteSection from "./NoteSection";
import NoteTable from "./NoteTable";
const Note = ()=>{
    return(
        <>
            <div className="row">
                <div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
                    <NoteSection/>
                </div>
                <div className={'col-12 col-md-8'}>
                    <NoteTable/>
                </div>
            </div>
        </>
    )
}

export default Note;