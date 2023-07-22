import './Calendar.css'
import Calendar from "react-calendar";
import ReservationIndicator from "./ReservationIndicator";

const CalendarComp = ({dates, type}) => {
	return (<div>
		<Calendar
			showNeighboringMonth={false}
			tileContent={({date, view}) => {
				return view === 'month' ? dates.includes(date.toLocaleDateString().split('T')[0]) ?
					<ReservationIndicator/> : null : null
			}}
		/>
	</div>);
}

export default CalendarComp;