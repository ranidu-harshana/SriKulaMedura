import {useDispatch, useSelector} from "react-redux";
import {
	addAdditionalPayments,
	clearAdditionalPaymentState,
	selectAllAdditionalPayments
} from "../store/slices/additionalPaymentSlice";
import {
	addInterimPayments,
	clearInterimPaymentState,
	selectAllInterimPayment
} from "../store/slices/InterimPaymentSlice";
import useGetOrSetDressSelections from "./useGetOrSetDressSelections";
import {reservationSelector, selectByIdReservation} from "../store/slices/reservationSlice";
import {useEffect} from "react";
import {getAllAdditionalPaymentsByReservation} from "../repository/additionalPaymentRepository";
import {getAllInterimPaymentsOfReservation} from "../repository/InterimPaymentRepository";

const UseBillGenerator = (id) => {
	const additionalPayments = useSelector(selectAllAdditionalPayments)
	const interimPayments = useSelector(selectAllInterimPayment)
	const dressSelections = useGetOrSetDressSelections(id)
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)

	const reservation = reservationCurr ? reservationCurr : reservationAlt

	const dispatcher = useDispatch()

	useEffect(() => {
		if (additionalPayments[0]?.reservation_id !== undefined && additionalPayments[0]?.reservation_id !== parseInt(id)) {
			dispatcher(clearAdditionalPaymentState())
		}
		if (additionalPayments.length <= 0) {
			getAllAdditionalPaymentsByReservation(id)
				.then((res) => {
					dispatcher(addAdditionalPayments(res.data))
				})
				.catch(err => console.log(err))
		}
	}, [id, dispatcher, additionalPayments])

	useEffect(()=>{
		if (interimPayments[0]?.reservation_id !== undefined && interimPayments[0]?.reservation_id !== parseInt(id)) {
			dispatcher(clearInterimPaymentState())
		}
		if (interimPayments.length <= 0) {
			getAllInterimPaymentsOfReservation(id)
				.then((res) => {
					dispatcher(addInterimPayments(res.data))
				})
		}
	}, [dispatcher, id, interimPayments])

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