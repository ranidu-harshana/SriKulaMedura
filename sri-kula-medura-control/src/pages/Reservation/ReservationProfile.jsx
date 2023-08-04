import Reservation from "../../components/Reservation/Reservation";
import {useParams} from "react-router-dom";
import NotificationContainer from "../../components/ToastNotification/NotificationContainer";

const ReservationProfile = (props) => {
	const {id} = useParams()

	return (
		<>
			<Reservation id={id}/>
			<NotificationContainer />
		</>
	);
}

export default ReservationProfile;