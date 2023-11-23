import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addNotes, clearNoteState, selectAllNotes} from "../../../store/slices/noteSlice";
import {useEffect} from "react";
import {getAllNoteOfReservation} from "../../../repository/noteRepository";

const NoteTable = (props) => {
    const {id} = useParams()
    const notes = useSelector(selectAllNotes)
    const dispatcher = useDispatch()
    
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
                        {notes?.map((note,index)=>
                        <tr key={index}>
                            <th scope="row">{note.id}</th>
                            <td>{note.note}</td>
                            <td>{note.created_at}</td>
                            <td>
                                <ButtonGroup size="small">
                                    <IconButton color="success" size="small">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton sx={{color:"red"}} size="small">
                                        <DeleteIcon />
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