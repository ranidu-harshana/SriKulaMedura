import Repository from "../utils/Repository";

const getAllUsers = () => {
	return Repository.get(`/user/`)
}

const getUserById = (id) => {
	return Repository.get(`/user/`+id)
}

const getUserByEmail = (email) => {
	return Repository.get(`/user/email/`+email)
}

export {
	getAllUsers,
	getUserById,
	getUserByEmail,
}