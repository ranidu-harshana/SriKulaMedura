import Reservation from "../../components/Reservation/Reservation";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectByIdReservation} from "../../store/slices/reservationSlice";

const ReservationProfile = (props) => {
	const {id} = useParams()
	const reservation = useSelector((state)=>selectByIdReservation(state, id))

	return (
		<><Reservation {...reservation}/></>
	);
}

export default ReservationProfile;