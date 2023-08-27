import Repository from "../utils/Repository";

const getAllOtherCostByReservation = (reservation_id)=>{
    return Repository.get('/cost/reservation/'+reservation_id)
}
const storeCost = (reservation_id, cost, reason ) => {
    return Repository.post('/cost/', {reservation_id, other_cost:cost, reason})
}

export {
    storeCost,
    getAllOtherCostByReservation
}