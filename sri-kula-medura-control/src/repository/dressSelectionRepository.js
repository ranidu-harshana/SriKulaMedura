import Repository from "../utils/Repository";

const storeDressSelections = (dresses) => {
	return Repository.post('/dressselection/', {dresses})
}

export {
	storeDressSelections,
}