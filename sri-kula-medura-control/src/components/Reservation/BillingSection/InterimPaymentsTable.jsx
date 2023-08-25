import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {
	deleteInterimPaymentOfReservation,
	getAllInterimPayments, storeInterimPayment,
} from "../../../repository/InterimPaymentRepository";
import Table from "../../Table/Table";
import notify from "../../../utils/notify";
import {
	addInterimPayments,
	deleteInterimPayment, saveInterimPayment,
	selectAllInterimPayment
} from "../../../store/slices/InterimPaymentSlice";

const InterimPaymentsTable = () => {
	const interimPayments = useSelector(selectAllInterimPayment)
	const dispatcher = useDispatch()

	const columns=[
		{field:'id',headerName:"Id",maxWidth:300},
		{field:'interim_payment',headerName:"Interim Payment"},
		{field: 'created_at', headerName: "Created At"},
		{field: 'id', headerName: "Actions", cellRenderer: InterimActionBtn}

	]
	useEffect(() => {
		if(interimPayments.length < 1) {
			getAllInterimPayments()
				.then((response) => {
					dispatcher(addInterimPayments(response.data))
				})
				.catch((error) => {
					console.log("ERROR: "+error)
				})
		}
	}, [dispatcher, interimPayments]);


	return (
		<>
			<div className="tab-content-container">
					<div className={'row'}>
						<h5 className={'col'}>All Interim Payments</h5>
					</div>
				<div className="row reservation-section-table px-2">
					<Table columns={columns} payload={interimPayments}/>
				</div>
			</div>
		</>
	);
}

export default InterimPaymentsTable;

const InterimActionBtn = (props) => {
	const { valueFormatted, value, interimPaymentId, reservationId} = props;
	const id = valueFormatted ? valueFormatted : value;

	const dispatcher = useDispatch();

	const handleDelete = () => {
		deleteInterimPaymentOfReservation(reservationId, interimPaymentId)
			.then(() => {
				dispatcher(deleteInterimPayment({ id: interimPaymentId }));
				notify(1, "Interim Payment Deleted Successfully");
			})
			.catch(error => {
				console.error("Error deleting Interim payment:", error);
				notify(0, "An error occurred while deleting Interim payment");
			});
	};

	return (
		<ButtonGroup aria-label="button group">
			<Link to={`/interim-payment/reservation/${id}`}>
				<IconButton aria-label="edit" color="success">
					<EditIcon />
				</IconButton>
			</Link>
			<IconButton sx={{ color: "red" }} size="small" aria-label="delete" color="error" onClick={handleDelete}>
				<DeleteIcon />
			</IconButton>
		</ButtonGroup>
	);
}