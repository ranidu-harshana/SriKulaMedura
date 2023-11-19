import Repository from "../utils/Repository";

const getAllWeddingReservations = (fromDate, toDate) => {
	return Repository.post('/report/reservations', {fromDate, toDate})
}

export {
	getAllWeddingReservations
}