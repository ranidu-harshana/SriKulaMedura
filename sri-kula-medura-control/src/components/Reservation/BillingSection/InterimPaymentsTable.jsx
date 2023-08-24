import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch, useSelector} from "react-redux";
import {addInterimPayments, selectAllInterimPayment} from "../../../store/slices/InterimPaymentSlice";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getAllInterimPayments} from "../../../repository/InterimPaymentRepository";
import Table from "../../Table/Table";

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
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>All Interim Payments</h5>
					</div>
				</div>
				<div className="row reservation-section-table px-2">
					<Table columns={columns} payload={interimPayments}/>
				</div>
			</div>
		</>
	);
}

export default InterimPaymentsTable;

const InterimActionBtn = (props) =>  {
	const id = props.valueFormatted ? props.valueFormatted : props.value;

	return (
		<>
			<ButtonGroup aria-label="button group">
				<Link to={`/interim-payment/${id}`}>
					<IconButton aria-label="fingerprint" color="success">
						<EditIcon />
					</IconButton>
				</Link>
				<IconButton sx={{color:"red"}} size="small">
					<DeleteIcon />
				</IconButton>
			</ButtonGroup>
		</>
	);
}