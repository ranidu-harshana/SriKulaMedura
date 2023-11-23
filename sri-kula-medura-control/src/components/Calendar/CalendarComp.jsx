import './Calendar.css'
import Calendar from "react-calendar";
import ReservationIndicator from "./ReservationIndicator";
import {useState} from 'react';
import BSModal from "../BSModal/BSModal";
import ResDetailsInModal from "../Reservation/ResDetailsInModal";
import {getReservationsByDate} from "../../repository/reservationRepository";
import {useDispatch} from "react-redux";
import {
	addReservationsByDate,
	clearReservationsByDate
} from "../../store/slices/reservationSlice";

const CalendarComp = ({dates}) => {
	const [show, setShow] = useState(false);
	const [onDate, setOnDate] = useState();
	const [reservationsByDate, setReservationsByDate] = useState([])
	const dispatcher = useDispatch()

	const handleClose = () => setShow(false);
	const handleShow = (date) => {
		setOnDate(date.toLocaleDateString())
		setShow(true)
		getReservationsByDate(new Date(date).toLocaleDateString())
			.then(res => {
				dispatcher(clearReservationsByDate())
				dispatcher(addReservationsByDate(res.data))
				setReservationsByDate(res.data)
			})
			.catch(err => console.error(err))
	};
	console.log(reservationsByDate)

	return (<div>
			<Calendar
				showNeighboringMonth={false}
				tileContent={({date, view}) => {
					return view === 'month' ? dates.includes(date.toLocaleDateString().split('T')[0]) ?
						<ReservationIndicator/> : null : null
				}}
				onClickDay={(value) => {
					handleShow(value)
				}}
			/>
			<BSModal show={show} handleClose={handleClose} modalTitle={"All Functions On: " + onDate}>
				<div>
					{
						reservationsByDate?.map((reservation, index) => {
							if (reservation.before_postpone_date != null)
								return <ResDetailsInModal reservationId={reservation?.id} billNumber={reservation?.bill_number}
												   cancelled={false} postponed={true}
												   cusName={reservation?.customer?.name} key={index} postponedDate={reservation.before_postpone_date}/>
							return <ResDetailsInModal reservationId={reservation?.id} billNumber={reservation?.bill_number}
												   cancelled={reservation?.status} cusName={reservation?.customer?.name}
												   key={index}/>
						})
					}
				</div>
			</BSModal>
		</div>);
}

export default CalendarComp;