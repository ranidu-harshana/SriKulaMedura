import Repository from "../utils/Repository";

const storeDressSelections = (dresses) => {
	return Repository.post('/dressselection/', {dresses})
}

const getAllByReservation = (reservation_id) => {
	return Repository.get('/dressselection/'+reservation_id+'/all')
}

export {
	storeDressSelections,
	getAllByReservation,
}