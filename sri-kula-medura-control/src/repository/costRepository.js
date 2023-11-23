import Repository from "../utils/Repository";

const getAllOtherCostByReservation = (reservation_id)=>{
    return Repository.get('/cost/reservation/other/'+reservation_id)
}

const getAllMainCostByReservation = (reservation_id)=>{
    return Repository.get('/cost/reservation/main/'+reservation_id)
}

const storeCost = (reservation_id, cost, reason ) => {
    return Repository.post('/cost/other', {reservation_id, other_cost:cost, reason})
}

const storeMainCost = (id, transport, salary, cleaning, depreciation, reservation_id ) => {
    return Repository.post('/cost/main', {id, transport, salary, cleaning, depreciation, reservation_id})
}

export {
    storeCost,
    storeMainCost,
    getAllOtherCostByReservation,
    getAllMainCostByReservation,
}