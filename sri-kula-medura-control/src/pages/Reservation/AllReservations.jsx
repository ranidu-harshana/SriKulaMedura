import {useEffect} from "react";
import Table from "../../components/Table/Table";
import PageTopic from "../../components/PageTopic/PageTopic";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom"
import {ButtonGroup} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addReservations, selectAllReservation} from "../../store/slices/reservationSlice";
import {getAllReservations} from "../../repository/reservationRepository";

const AllReservations = (props) => {
	const reservations = useSelector(selectAllReservation)
	const dispatcher = useDispatch()

	const columns = [
		{field: 'id', headerName: "Id", maxWidth: 300},
		{field: 'bill_number', headerName: "Bill Number"},
		{field: 'function_date', headerName: "Function Date"},
		{field: 'function_place', headerName: "Function Place"},
		{field: 'measurement_date', headerName: "Measurement Date"},
		{field: 'branch_name', headerName: "Branch Name"},
		{field: 'id', headerName: "Actions", cellRenderer: ResActionBtns},
		{field: 'date', headerName: "Created At"}
	]

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

	return (
		<div>
			<PageTopic topic={"Reservation"} breadcrumbs={[
				{title: 'Home', link: "/", active: false},
				{title: 'Reservations', active: true}
			]}/>
			<Table columns={columns} payload={reservations}/>
		</div>
	);
}

export default AllReservations;

const ResActionBtns = (props) =>  {
	const id = props.valueFormatted ? props.valueFormatted : props.value;

	return (
		<>
			<ButtonGroup aria-label="button group">
				<Link to={`/reservation/${id}`}>
					<IconButton aria-label="fingerprint" color="success">
						<RemoveRedEyeIcon />
					</IconButton>
				</Link>
				{/*<IconButton aria-label="fingerprint" color="info">*/}
				{/*	<CalendarMonthIcon />*/}
				{/*</IconButton>*/}
			</ButtonGroup>
		</>
	);
}