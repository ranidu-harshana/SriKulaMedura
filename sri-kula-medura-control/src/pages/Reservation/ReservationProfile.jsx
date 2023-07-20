import Reservation from "../../components/Reservation/Reservation";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addSingleReservation, reservationSelector, selectByIdReservation} from "../../store/slices/reservationSlice";
import {useEffect} from "react";
import {getReservation} from "../../repository/reservationRepository";

const ReservationProfile = (props) => {
	const {id} = useParams()
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const dispatcher = useDispatch()

	useEffect(() => {
		if (!reservationCurr) {
			getReservation(id)
				.then((response) => {
					dispatcher(addSingleReservation(response.data))
				})
				.catch(error => {
					console.log("ERROR: " + error)
				})
		}
	}, [dispatcher, id, reservationCurr]);

	const reservation = reservationCurr ? reservationCurr : reservationAlt

	return (
		<><Reservation {...reservation}/></>
	);
}

export default ReservationProfile;