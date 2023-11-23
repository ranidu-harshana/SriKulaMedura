import Repository from "../utils/Repository";

const getAllBranches = () => {
	return Repository.get('/branch/')
}

const getBranch = (id) => {
	return Repository.get('/branch/'+id)
}

const storeBranch = (name, prefix) => {
	return Repository.post('/branch/', {name, prefix})
}

export {
	getAllBranches,
	getBranch,
	storeBranch,
}