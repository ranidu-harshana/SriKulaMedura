import {Chip} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const ReservationIndicator = () => {
	return (
		<>
			<Chip color="success" size="small" label={"There are Reservations"} icon={<EventIcon/>}
			      className={'mt-4 px-2 py-3'}/>
		</>
	)
}

export default ReservationIndicator