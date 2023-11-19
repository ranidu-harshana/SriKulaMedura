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

const storeReservation = (name, nic, address, branchId, mobile_no1, mobno2, function_date) => {
	const user_id = 1; // TODO: Need to Handle this
	return Repository.post('/reservation/', {
		function_date,
		user_id,
		branch_id: branchId,
		name, nic, address, mobile_no1, mobno2
	})
}

const storeBestMenPageBoysCount = (reservation_id, no_of_bestmen, no_of_pageboys) => {
	return Repository.post('/reservation/bestmenpageboys/count', {
		reservation_id,
		no_of_bestmen,
		no_of_pageboys
	})
}

const cancelReservation = (reservationId) => {
	let canceled = true;
	return Repository.post('/reservation/cancel', {
		reservationId, canceled
	})
}
const postponeReservation = (reservationId, postponeDate) => {
	return Repository.post('/reservation/postpone', {
		reservationId, postponeDate
	})
}

export {
	getAllReservations,
	getReservation,
	getReservationsByDate,
	storeReservation,
	storeBestMenPageBoysCount,
	cancelReservation,
	postponeReservation,
}