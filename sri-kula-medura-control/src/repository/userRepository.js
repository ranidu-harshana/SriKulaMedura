import Repository from "../utils/Repository";

const getAllUsers = () => {
	return Repository.get(`/user/`)
}

const getUser = (id) => {
	return Repository.get(`/user/`+id)
}

export {
	getAllUsers,
	getUser,
}