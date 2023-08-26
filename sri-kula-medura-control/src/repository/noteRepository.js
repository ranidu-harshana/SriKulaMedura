import Repository from "../utils/Repository";

const getAllNotes = () => {
    return Repository.get('/note/')
}

const getNote = (id) => {
    return Repository.get('/note/'+id)
}

const storeNote = (reservation_id, note) => {
    return Repository.post('/note/', {reservation_id, note})
}

export {
    getNote,
    getAllNotes,
    storeNote,
}