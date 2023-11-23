import axios from 'axios'
import {BASE_URL} from "./Constants";

const Repository = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    // timeout: 1000,
})

export default Repository