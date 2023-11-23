import Repository from "../utils/Repository";

const getAllItemCategories = () => {
	return Repository.get('/itemcategory/')
}

const getItemCategory = (id) => {
	return Repository.get('/itemcategory/'+id)
}

export {
	getAllItemCategories,
	getItemCategory,
}