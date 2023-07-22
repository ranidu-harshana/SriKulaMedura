import {useEffect, useState} from "react";
import Table from "../../components/Table/Table";
import PageTopic from "../../components/PageTopic/PageTopic";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom"
import {ButtonGroup, Popover} from "@mui/material";
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useDispatch, useSelector} from "react-redux";
import {addReservations, selectAllReservation} from "../../store/slices/reservationSlice";
import {getAllReservations} from "../../repository/reservationRepository";
import Button from "@mui/material/Button";

const AllReservations = (props) => {
	const reservations = useSelector(selectAllReservation)
	const dispatcher = useDispatch()

	const columns = [{field: 'id', headerName: "Id", maxWidth: 300}, {
		field: 'bill_number',
		headerName: "Bill Number"
	}, {field: 'function_date', headerName: "Function Date"}, {
		field: 'function_place',
		headerName: "Function Place"
	}, {field: 'measurement_date', headerName: "Measurement Date"}, {
		field: 'branch_name',
		headerName: "Branch Name"
	}, {field: 'id', headerName: "Actions", cellRenderer: ReservationTblClmnBtn}, {
		field: 'date',
		headerName: "Created At"
	}]

	useEffect(() => {
		getAllReservations()
			.then((response) => {
				dispatcher(addReservations(response.data))
			})
			.catch((error) => {
				console.log("ERROR: " + error)
			})
	}, [dispatcher]);

	return (<div>
			<PageTopic topic={"Reservation"} breadcrumbs={[
				{title: 'Home', link: "/", active: false},
				{title: 'Reservations', active: true}
			]}/>
			<Table columns={columns} payload={reservations}/>
		</div>);
}

export default AllReservations;

const ReservationTblClmnBtn = (props) => {
	const [measurementDate, setMeasurementDate] = useState()
	const id = props.valueFormatted ? props.valueFormatted : props.value;

	return (<>
			<ButtonGroup aria-label="button group">
				<Link to={`/reservation/${id}`}>
					<IconButton aria-label="fingerprint" color="success">
						<RemoveRedEyeIcon/>
					</IconButton>
				</Link>
				<PopupState variant="popover" popupId="demo-popup-popover">
					{(popupState) => (<div>
							<IconButton aria-label="fingerprint" color="info" {...bindTrigger(popupState)}>
								<CalendarMonthIcon/>
							</IconButton>
							<Popover
								{...bindPopover(popupState)}
								anchorOrigin={{
									vertical: 'top', horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'bottom', horizontal: 'center',
								}}
							>
								<div className={'p-4'}>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker']}>
											<DatePicker label="Add Measurement Date"
											            onChange={(value) => {
												            setMeasurementDate(new Date(value))
											            }}/>
										</DemoContainer>
									</LocalizationProvider>
									<div className={'text-end mt-2'}>
										<Button variant="contained" color="success" onClick={() => {
											console.log(measurementDate)
										}}>
											Save
										</Button>
									</div>

								</div>

							</Popover>
						</div>)}
				</PopupState>
			</ButtonGroup>
		</>);
}