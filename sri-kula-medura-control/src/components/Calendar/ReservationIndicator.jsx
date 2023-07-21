import {Chip, useMediaQuery} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import IconButton from "@mui/material/IconButton";

const ReservationIndicator = () => {
	const matches = useMediaQuery('(max-width: 768px)')

	return (<>
			{matches ? <IconButton><EventIcon style={{
				fontSize: "10px", color: "green",
			}}/></IconButton> : <Chip color="success" size="small" label={"There are Reservations"} icon={<EventIcon/>}
			                          className={'mt-4 px-2 py-3'}/>}
		</>)
}

export default ReservationIndicator