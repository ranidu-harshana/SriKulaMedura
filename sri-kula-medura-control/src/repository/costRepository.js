import Repository from "../utils/Repository";

const storeCost = (reservation_id, cost, reason ) => {
    return Repository.post('/cost/', {reservation_id, other_cost:cost, reason})
}

export {
    storeCost
}