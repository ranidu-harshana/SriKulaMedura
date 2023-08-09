import Repository from "../utils/Repository";

const getAllNotes = () => {
    return Repository.get('/note/')
}

const getNote = (id) => {
    return Repository.get('/note/'+id)
}

const storeNote = (note,status) => {
    return Repository.post('/note/', {note,status})
}

export {
    getAllNotes,
    getNote,
    storeNote,
}