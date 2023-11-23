import Repository from "../utils/Repository";

const saveMeasurements = (type, name, head, shoulder, chest, weist, tlength, ssize, arm, jheight, other, reservation_id) => {
	return Repository.post("/measurements/", {type, name, head, shoulder, chest, weist, tlength, ssize, arm, jheight, other, reservation_id})
}

const getMeasurementByTypeAndReservation = (type, reservation_id) => {
	return Repository.get("/measurements/by/"+type+"/"+reservation_id+"")
}

const getAllMeasurementsOfReservation = (reservation_id) => {
	return Repository.get("measurements/reservation/" + reservation_id)
}

export {
	saveMeasurements,
	getMeasurementByTypeAndReservation,
	getAllMeasurementsOfReservation
}