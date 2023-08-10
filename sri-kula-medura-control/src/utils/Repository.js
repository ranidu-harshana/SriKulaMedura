import axios from 'axios'
import {BASE_URL} from "./constants";

const accessToken = localStorage.getItem("accessToken");
const Repository = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': 'Bearer '+accessToken
	},
	// timeout: 1000,
})

export default Repository