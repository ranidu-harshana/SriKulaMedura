import Repository from "../utils/Repository";

const getAllNotes = () => {
    return Repository.get('/note/')
}

const getAllNoteOfReservation = (reservation_id) =>{
    return Repository.get('/note/reservation/' + reservation_id)
}

const getNote = (id) => {
    return Repository.get('/note/'+id)
}

const updateNote = (id,note, reservation_id) =>{
        return Repository.put('/note/'+id,{id,note,reservation_id})
}

const deleteNote = (id) =>{
    return Repository.delete('/note/'+id)
}
const storeNote = (reservation_id, note) => {
    return Repository.post('/note/', {reservation_id, note})
}

export {
    getAllNoteOfReservation,
    getNote,
    getAllNotes,
    storeNote,
    updateNote,
    deleteNote
}