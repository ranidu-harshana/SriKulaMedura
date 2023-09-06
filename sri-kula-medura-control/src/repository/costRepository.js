import Repository from "../utils/Repository";

const getAllCostByReservation = (reservation_id)=>{
    return Repository.get('/cost/reservation/'+reservation_id)
}
const storeCost = (reservation_id, transport,salary,cleaning,depreciation ) => {
    return Repository.post('/cost/', {reservation_id, transport, salary,cleaning,depreciation})
}

export {
    storeCost,
    getAllCostByReservation
}