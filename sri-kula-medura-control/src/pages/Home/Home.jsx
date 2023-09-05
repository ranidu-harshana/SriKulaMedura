import CalendarComp from "../../components/Calendar/CalendarComp";
import {useEffect} from "react";
import {getAllReservations} from "../../repository/reservationRepository";
import {addReservations, selectAllReservation} from "../../store/slices/reservationSlice";
import {useDispatch, useSelector} from "react-redux";

const Home = (props) => {
	const reservations = useSelector(selectAllReservation)
	const dispatcher = useDispatch()

	useEffect(() => {
		if(reservations.length < 1) {
			getAllReservations()
				.then((response) => {
					dispatcher(addReservations(response.data))
				})
				.catch((error) => {
					console.log("ERROR: "+error)
				})
		}
	}, [dispatcher, reservations]);

	const dates = []

	reservations.forEach((reservation) => {
		dates.push(new Date(reservation.function_date).toLocaleDateString())
	})

	return (
		<div>
			<CalendarComp dates={dates}/>
		</div>
	);
}

export default Home;