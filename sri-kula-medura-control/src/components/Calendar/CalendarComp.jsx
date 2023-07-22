import './Calendar.css'
import Calendar from "react-calendar";
import ReservationIndicator from "./ReservationIndicator";
import {useState} from 'react';
import BSModal from "../BSModal/BSModal";
import ResDetailsInModal from "../Reservation/ResDetailsInModal";

const CalendarComp = ({dates, type}) => {
	const [show, setShow] = useState(false);
	const [date, setDate] = useState();

	const handleClose = () => setShow(false);
	const handleShow = (date) => {
		setDate(date.toLocaleDateString())
		setShow(true)
	};

	return (<div>
		<Calendar
			showNeighboringMonth={false}
			tileContent={({date, view}) => {
				return view === 'month' ? dates.includes(date.toLocaleDateString().split('T')[0]) ?
					<ReservationIndicator/> : null : null
			}}
			onClickDay={(value)=>{
				handleShow(value)
			}}
		/>
			<BSModal show={show} handleClose={handleClose} modalTitle={"All Functions On: "+date}>
				<div>
					<ResDetailsInModal billNumber={'SMB2744'} cancelled={true} cusName={"Sachini Deepashika"}/>
					<ResDetailsInModal billNumber={'SMB2746'} cusName={"Sachindu Malshan"}/>
					<ResDetailsInModal billNumber={'SMB2745'} postponed={true} cusName={"Danilka Shalinda"}/>
				</div>
			</BSModal>
	</div>
);
}

export default CalendarComp;