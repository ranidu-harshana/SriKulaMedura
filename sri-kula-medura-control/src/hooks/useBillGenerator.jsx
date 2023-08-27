import {useSelector} from "react-redux";
import {selectAllAdditionalPayments} from "../store/slices/additionalPaymentSlice";
import {selectAllInterimPayment} from "../store/slices/InterimPaymentSlice";
import {reservationSelector, selectByIdReservation} from "../store/slices/reservationSlice";
import useGetOrSetDressSelections from "./useGetOrSetDressSelections";

const UseBillGenerator = (id) => {
	const additionalPayments = useSelector(selectAllAdditionalPayments)
	const interimPayments = useSelector(selectAllInterimPayment)
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const dressSelections = useGetOrSetDressSelections(id)

	const reservation = reservationCurr ? reservationCurr : reservationAlt

	let dressPriceSum = 0
	dressSelections?.forEach(dress => {
		dressPriceSum += dress.item.item_price
	})

	let additionalPaymentsSum = 0
	additionalPayments?.forEach(additionalPayment => {
		additionalPaymentsSum += additionalPayment.payment
	})

	let interimPaymentsSum = 0
	interimPayments?.forEach(interimPayment => {
		interimPaymentsSum += interimPayment.interim_payment
	})

	const customerDiscount = reservation.customer?.discount
	// TODO: implement these
	const reservationDiscount = 0
	const advancedPayment = 0

	const totalAmount = (dressPriceSum + additionalPaymentsSum) - (customerDiscount + reservationDiscount)
	const balanceToPay = totalAmount - (advancedPayment + interimPaymentsSum)

	return {
		additionalPayments,
		interimPayments,
		dressPriceSum,
		additionalPaymentsSum,
		interimPaymentsSum,
		reservationDiscount,
		customerDiscount,
		advancedPayment,
		totalAmount,
		balanceToPay
	}
}

export default UseBillGenerator;