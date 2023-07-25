import Reservation from "../../components/Reservation/Reservation";
import {useParams} from "react-router-dom";

const ReservationProfile = (props) => {
	const {id} = useParams()

	return (
		<><Reservation id={id}/></>
	);
}

export default ReservationProfile;