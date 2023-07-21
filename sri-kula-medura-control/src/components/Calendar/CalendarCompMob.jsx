import './CalendarM.css'
import Calendar from "react-calendar";

const CalendarComp = (props) => {
	return (
		<div>
			<Calendar
				showNeighboringMonth={false}
			/>
		</div>
	);
}

export default CalendarComp;