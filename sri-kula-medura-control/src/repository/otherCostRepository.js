import Repository from "../utils/Repository";

const getAllOtherCostByReservation = (reservation_id)=>{
    return Repository.get('/other-cost/reservation/'+reservation_id)
}
const storeOtherCost = (reservation_id, other_cost, reason ) => {
    return Repository.post('/other-cost/', {reservation_id, other_cost, reason})
}

export {
    storeOtherCost,
    getAllOtherCostByReservation
}