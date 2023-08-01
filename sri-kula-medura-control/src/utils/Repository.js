import axios from 'axios'
import {BASE_URL} from "./constants";

const Repository = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	// timeout: 1000,
})

export default Repository