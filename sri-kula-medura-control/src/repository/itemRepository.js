import Repository from "../utils/Repository";

const getAllItems = () => {
	return Repository.get('/item/')
}

const getItem = (id) => {
	return Repository.get('/item/'+id)
}

const storeItem = (item_code, item_name, item_type, item_image_url, item_price, item_category_id) => {
	return Repository.post('/item/', {item_code, item_name, item_type, item_image_url, item_price, item_category_id})
}

const searchItem = (query, type) => {
	return Repository.get('/item/search/'+query+'/'+type)
}

const checkItemExist = (query, type) => {
	if (!query) {
		query = "-"
	}
	return Repository.get('/item/check/exist/'+query+'/'+type)
}

export {
	getAllItems,
	getItem,
	storeItem,
	searchItem,
	checkItemExist,
}