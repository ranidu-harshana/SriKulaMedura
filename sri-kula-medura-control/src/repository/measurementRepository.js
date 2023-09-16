import Repository from "../utils/Repository";

const saveMeasurements = (type, name, head, shoulder, chest, weist, tlength, ssize, arm, jheight, other, reservation_id) => {
	return Repository.post("/measurements/", {type, name, head, shoulder, chest, weist, tlength, ssize, arm, jheight, other, reservation_id})
}

export {
	saveMeasurements
}