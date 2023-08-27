import Repository from "../utils/Repository";

const getAllOtherCosts =() =>{
    return Repository.get('/other-cost/')
}

const getAllOtherCostsByReservation =(reservation_id) =>{
    return Repository.get('/other-cost/reservation/' + reservation_id)
}

const storeOtherCost = (reservation_id, cost, reason ) => {
    return Repository.post('/other-cost/', {reservation_id, cost, reason})
}

export {
    getAllOtherCostsByReservation,
    getAllOtherCosts,
    storeOtherCost
}