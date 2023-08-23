import Repository from "../utils/Repository";

const getAllInterimPayments = () => {
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
    getAllInterimPayments,
    storeInterimPayment,
}