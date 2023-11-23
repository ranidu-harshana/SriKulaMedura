import Repository from "../utils/Repository";

const updateAmountPayable = (amount_payable, reservation_id) => {
	return Repository.put('/billing/edit/payable', {amount_payable, reservation_id});
}

const payAmountOnline = (reservation_id) => {
	return Repository.get('/online-payment/'+reservation_id);
}

export {
	updateAmountPayable,
	payAmountOnline,
}