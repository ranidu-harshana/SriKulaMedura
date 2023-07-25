import Repository from "../utils/Repository";

const getAllItems = () => {
	return Repository.get('/item/')
}

const getItem = (id) => {
	return Repository.get('/item/'+id)
}

const storeItem = (item_code, item_name, item_type, item_image_url, item_category_id) => {
	return Repository.post('/item/', {item_code, item_name, item_type, item_image_url, item_category_id}, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

export {
	getAllItems,
	getItem,
	storeItem,
}