import Repository from "../utils/Repository";

const getAllNotes = () => {
    return Repository.get('/note/')
}

const getNote = (id) => {
    return Repository.get('/note/'+id)
}

const storeNote = (note) => {
    return Repository.post('/note/', {note})
}

export {
    getNote,
    getAllNotes,
    storeNote,
}