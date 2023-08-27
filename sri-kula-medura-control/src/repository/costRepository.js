import Repository from "../utils/Repository";

const getAllCosts =() =>{
    return Repository.get('/cost/')
}

const getAllCostsByReservation =(rservation_id) =>{
    return Repository.get('/cost/reservation/' + reservation_id)
}

const storeCost = (reservation_id, cost, reason ) => {
    return Repository.post('/cost/', {reservation_id, cost, reason})
}

export {
    getAllCostsByReservation,
    getAllCosts,
    storeCost
}