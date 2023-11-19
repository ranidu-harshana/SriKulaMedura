import Repository from "../utils/Repository";

const getReservationByBillNo = (billNo) => {
    return Repository.post(`/reservation/get-by-billno`, {
        billNumber: billNo
    })
}

export {
    getReservationByBillNo,
}