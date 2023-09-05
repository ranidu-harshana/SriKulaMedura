import './Calendar.css'
import Calendar from "react-calendar";
import ReservationIndicator from "./ReservationIndicator";
import {useState} from 'react';
import BSModal from "../BSModal/BSModal";
import ResDetailsInModal from "../Reservation/ResDetailsInModal";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";
import {getReservation, getReservationsByDate} from "../../repository/reservationRepository";

const CalendarComp = ({dates, type}) => {
	const [show, setShow] = useState(false);
	const [onDate, setOnDate] = useState();

	const handleClose = () => setShow(false);
	const handleShow = (date) => {
		setOnDate(date.toLocaleDateString())
		setShow(true)
		getReservationsByDate(new Date(date).toLocaleDateString())
			.then(res => {
				console.log(res.data)
			})
			.catch(err => console.error(err))
	};

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
					<ResDetailsInModal billNumber={'SMB2744'} cancelled={true} cusName={"Sachini Deepashika"}/>
					<ResDetailsInModal billNumber={'SMB2746'} cusName={"Sachindu Malshan"}/>
					<ResDetailsInModal billNumber={'SMB2745'} postponed={true} cusName={"Danilka Shalinda"}/>
				</div>
			</BSModal>
		</div>);
}

export default CalendarComp;