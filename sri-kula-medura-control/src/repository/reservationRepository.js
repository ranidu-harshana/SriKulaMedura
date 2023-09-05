import Repository from "../utils/Repository";

const getAllReservations = () => {
	return Repository.get(`/reservation/`)
}

const getReservation = (id) => {
	return Repository.get(`/reservation/`+id)
}

const getReservationsByDate = (date) => {
	console.log(date)
	return Repository.post(`/reservation/reservations/by-date`, {function_date: date})
}

const storeReservation = (name, address, branchId, mobile_no1, mobno2, function_date) => {
	const user_id = 1; // TODO: Need to Handle this
	return Repository.post('/reservation/', {
		function_date,
		user_id,
		branch_id: branchId,
		name, address, mobile_no1, mobno2
	})
}

const storeBestMenPageBoysCount = (reservation_id, no_of_bestmen, no_of_pageboys) => {
	return Repository.post('/reservation/bestmenpageboys/count', {
		reservation_id,
		no_of_bestmen,
		no_of_pageboys
	})
}

export {
	getAllReservations,
	getReservation,
	getReservationsByDate,
	storeReservation,
	storeBestMenPageBoysCount,
}