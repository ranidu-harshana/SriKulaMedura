import './Calendar.css'
import Calendar from "react-calendar";
import ReservationIndicator from "./ReservationIndicator";

const CalendarComp = ({dates}) => {
	return (<div>
			<Calendar
				showNeighboringMonth={false}
				tileContent={({date, view}) => {
					return view === 'month' ?
						<p>{dates.includes(date.toJSON().split('T')[0]) ? <ReservationIndicator/> : null}</p> : null
				}}
			/>
		</div>);
}

export default CalendarComp;