import Reservation from "../../components/Reservation/Reservation";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
	addReservation,
	reservationSelector,
	selectByIdReservation
} from "../../store/slices/reservationSlice";
import {BASE_URL} from "../../utils/constants"
import {useEffect} from "react";
import axios from "axios";

const ReservationProfile = (props) => {
	const {id} = useParams()
	const reservationCurr = useSelector((state)=>selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const dispatcher = useDispatch()

	useEffect(() => {
		if (!reservationCurr) {
			axios.get(BASE_URL+'/reservation/2').then((response) => {
				dispatcher(addReservation(response.data))
			});
		}
	}, [dispatcher, reservationCurr]);

	const reservation = reservationCurr ? reservationCurr : reservationAlt

	return (
		<><Reservation {...reservation}/></>
	);
}

export default ReservationProfile;