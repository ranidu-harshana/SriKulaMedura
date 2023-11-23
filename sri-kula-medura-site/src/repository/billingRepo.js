import Repository from "../utils/Repository";

const payAmountOnline = (reservation_id, payAmount) => {
    return Repository.post('/online-payment', {
        reservationId: reservation_id,
        amount: payAmount
    });
}

export {
    payAmountOnline,
}