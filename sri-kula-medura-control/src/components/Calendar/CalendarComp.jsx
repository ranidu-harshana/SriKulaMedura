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

const CalendarComp = ({dates, type}) => {
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
						reservationsByDate?.map((reservation, index) =>
							<ResDetailsInModal billNumber={reservation?.bill_number} cancelled={false} cusName={reservation?.customer?.name} key={index}/>
						)
					}

					{/*<ResDetailsInModal billNumber={'SMB2744'} cancelled={true} cusName={"Sachini Deepashika"}/>*/}
					{/*<ResDetailsInModal billNumber={'SMB2746'} cusName={"Sachindu Malshan"}/>*/}
					{/*<ResDetailsInModal billNumber={'SMB2745'} postponed={true} cusName={"Danilka Shalinda"}/>*/}
				</div>
			</BSModal>
		</div>);
}

export default CalendarComp;