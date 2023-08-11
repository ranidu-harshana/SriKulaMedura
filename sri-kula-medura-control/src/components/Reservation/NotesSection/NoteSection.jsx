import { useState} from "react";
import {useDispatch} from "react-redux";
import {saveNote} from "../../../store/slices/noteSlice";

import notify from "../../../utils/notify";
import {storeNote} from "../../../repository/noteRepository";
import {useParams} from "react-router-dom";

const NoteSection = (props) => {
    const {id} = useParams()
    const [note ,setNote] = useState()
    const dispatcher = useDispatch()
    const isSubmitDisabled = !note ;
    
    return (
        <>
            <div className="tab-content-container">
                <div className="row mb-2">
                    <div className={'row'}>
                        <h5 className={'col'}>Add Note</h5>
                        <span className={'text-secondary small'}><span className={'text-danger'}>* </span>Add Special Notes..</span>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="row mb-3">
                        <p className={'col-3'}>Note :</p>
                        <div className={'col-9'}>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
                                      value={note}
                                      onChange={(e)=>setNote(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3"></div>
                        <div className="col-9 text-end">
                            <button type="submit" className="btn btn-success"
                                    disabled={isSubmitDisabled}
                                    onClick={()=>{
                                storeNote(id, note)
                                    .then(response => {
                                        if (response.status === 200) {
                                            dispatcher(saveNote({...response.data}));
                                            notify(1,"Note Saved Successfully");
                                        } else {
                                            notify(0, "Note not saved")
                                        }
                                    })
                                    .catch(error => console.log(error))
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoteSection;