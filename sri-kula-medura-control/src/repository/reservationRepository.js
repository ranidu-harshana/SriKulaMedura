import Repository from "../utils/Repository";

const getAllReservations = () => {
	return Repository.get(`/reservation/`)
}

const getReservation = (id) => {
	return Repository.get(`/reservation/`+id)
}

const storeReservation = (name, address, branchId, mobno2, mobno1, function_date) => {
	const user_id = 1;
	return Repository.post('/reservation/', {
		function_date,
		user_id,
		branch_id: branchId,
		name, address, mobno1, mobno2
	}, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

export {
	getAllReservations,
	getReservation,
	storeReservation,
}