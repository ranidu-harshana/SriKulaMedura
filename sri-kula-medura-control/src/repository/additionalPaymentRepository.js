import Repository from "../utils/Repository";

const getAllAdditionalPayments = () => {
    return Repository.get('/additional-payment/')
}

const getAdditionalPayment = (id) => {
    return Repository.get('/additional-payment/'+id)
}

const storeAdditionalPayment = (reservation_id, payment, reason ) => {
    return Repository.post('/additional-payment/', {reservation_id, payment, reason})
}

export {
    getAllAdditionalPayments,
    getAdditionalPayment,
    storeAdditionalPayment,
}