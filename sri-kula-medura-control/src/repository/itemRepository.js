import Repository from "../utils/Repository";

const getAllItems = () => {
	return Repository.get('/item/')
}

const getItem = (id) => {
	return Repository.get('/item/'+id)
}

export {
	getAllItems,
	getItem
}