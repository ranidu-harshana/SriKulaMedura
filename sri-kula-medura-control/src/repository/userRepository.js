import Repository from "../utils/Repository";

const storeUser = (name, email, address, mobile_no, role) => {
	return Repository.post('/auth/register', {name, email, address, mobile_no, role})
}

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
	storeUser,
	getAllUsers,
	getUserById,
	getUserByEmail,
}