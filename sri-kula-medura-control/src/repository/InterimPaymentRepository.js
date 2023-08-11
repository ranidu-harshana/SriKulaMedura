import Repository from "../utils/Repository";

const getAllInterimPayment = () => {
    return Repository.get('/interim-payment/')
}

const getInterimPayment = (id) => {
    return Repository.get('/interim-payment/'+id)
}

const storeInterimPayment = (reservation_id, interimPayment) => {
    return Repository.post('/interim-payment/', {reservation_id, interimPayment})
}

export {
    getInterimPayment,
    getAllInterimPayment,
    storeInterimPayment,
}