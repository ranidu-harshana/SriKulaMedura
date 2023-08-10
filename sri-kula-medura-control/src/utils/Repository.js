import axios from 'axios'
import {BASE_URL} from "./constants";

const Repository = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2OTE2ODEyNDUsImV4cCI6MTY5MTY4MjY4NX0.bUPKkj-IqWAcT1Qw31W0RbR6_0i4iLYxktXjkcnh864'
	},
	// timeout: 1000,
})

export default Repository