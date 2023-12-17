import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addNotes, clearNoteState, selectAllNotes, deleteNotes,updateNotes} from "../../../store/slices/noteSlice";
import {useEffect} from "react";
import {deleteNote, getAllNoteOfReservation, updateNote,} from "../../../repository/noteRepository";
import Swal from "sweetalert2";

const NoteTable = (props) => {
    const {id} = useParams()
    const notes = useSelector(selectAllNotes)
    const deleteNotesOne = useSelector(deleteNotes)
    const updateNotesOne = useSelector(updateNotes)
    const dispatcher = useDispatch();

    useEffect(() => {
        if (notes[0]?.reservation_id !== undefined && notes[0]?.reservation_id !== parseInt(id)) {
            dispatcher(clearNoteState())
        }
        if (notes.length <= 0) {
            getAllNoteOfReservation(id)
                .then((res) => {
                    dispatcher(addNotes(res.data))
                })
                .catch(err => console.log(err))
        }
    }, [id, dispatcher, notes])

    const handleDeleteNote = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteNote(id)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Successfully Deleted",
                            // Your file has been deleted.
                            icon: "success"
                        });
                        dispatcher(deleteNotes(id))
                    })

                    .catch(error => {
                        console.error('Error deleting note:', error);
                    });
            }
        });
    };



    async function handleUpdateNote(id,note,reservation_id) {
        const {value: text} = await Swal.fire({
            input: "textarea",
            inputLabel: "Note",
            inputPlaceholder: note,
            inputAttributes: {
                "aria-label": "Type your note here"
            },
            showCancelButton: true
        });
        if (text) {
            const noteData={
                id:id,
                note:text,
                reservation_id:reservation_id
            }
            updateNote(id,text,reservation_id)
                .then((res)=>{
                Swal.fire({
                    title: "Updated!",
                    text: "Successfully Updated",
                    // Your file has been deleted.
                    icon: "success"
                });
                    dispatcher(updateNotes({id, text, reservation_id}))
                })
        }else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Update Failed",
            });
        }
    }

    return (
        <>
            <div className="tab-content-container">
                <div className="row mb-2">
                    <div className={'row'}>
                        <h5 className={'col'}>All Notes </h5>
                    </div>
                </div>
                <div className="row reservation-section-table table-hover px-2">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Note</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {notes?.map((note, index) =>
                            <tr key={index}>
                                <th scope="row">{note.id}</th>
                                <td>{note.note}</td>
                                <td>{note.created_at}</td>
                                <td>
                                    <ButtonGroup size="small">
                                        <IconButton color="success" size="small"
                                                    onClick={() => handleUpdateNote(note.id, note.note,note.reservation_id)}>
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton sx={{color: "red"}} size="small"
                                                    onClick={() => handleDeleteNote(note.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default NoteTable;