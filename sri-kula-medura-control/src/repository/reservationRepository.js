import Repository from "../utils/Repository";

const getAllReservations = () => {
	return Repository.get(`/reservation/`)
}

const getReservation = (id) => {
	return Repository.get(`/reservation/`+id)
}

export {
	getAllReservations,
	getReservation
}