import Repository from "../utils/Repository";

const getAllInterimPayments = () => {
    return Repository.get('/interim-payment/')
}

const getAllInterimPaymentsOfReservation = (reservation_id) => {
    return Repository.get('/interim-payment/reservation/' + reservation_id)
}

const getInterimPayment = (id) => {
    return Repository.get('/interim-payment/'+id)
}

const deleteInterimPaymentOfReservation = (reservation_id, id) => {
    return Repository.delete(`/interim-payment/reservation/${reservation_id}/${id}`);
}

const storeInterimPayment = (reservation_id, interim_payment) => {
    return Repository.post('/interim-payment/', {reservation_id, interim_payment})
}

export {
    getInterimPayment,
    getAllInterimPaymentsOfReservation,
    getAllInterimPayments,
    storeInterimPayment,
    deleteInterimPaymentOfReservation
}