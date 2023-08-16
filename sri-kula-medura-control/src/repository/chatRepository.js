import Repository from "../utils/Repository";

const getAllMessagesBySenderReceiver = (fid, sid) => {
	return Repository.get('/chat/get-messages/'+fid+'/'+sid);
}

export {
	getAllMessagesBySenderReceiver,
}