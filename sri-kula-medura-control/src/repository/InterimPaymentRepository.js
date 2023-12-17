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

const storeInterimPayment = (reservation_id, interim_payment) => {
    return Repository.post('/interim-payment/', {reservation_id, interim_payment})
}

const updateInterimPayment = (id,interim_payment, reservation_id) =>{
    return Repository.put('/interim-payment/'+id,{id,interim_payment,reservation_id})
}

const deleteInterimPayment = (id) =>{
    return Repository.delete('/interim-payment/'+id)
}

export {
    getInterimPayment,
    getAllInterimPaymentsOfReservation,
    getAllInterimPayments,
    storeInterimPayment,
    updateInterimPayment,
    deleteInterimPayment
}