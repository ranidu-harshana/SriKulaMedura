import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useParams} from "react-router-dom";
import useBillGenerator from "../../../hooks/useBillGenerator";
import {useEffect} from "react";
import {addInterimPayments, clearInterimPaymentState,deleteInterimPayments,updateInterimPayments} from "../../../store/slices/InterimPaymentSlice";
import {getAllInterimPaymentsOfReservation,deleteInterimPayment,updateInterimPayment} from "../../../repository/InterimPaymentRepository";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import {formatTime} from "../../../utils/formatTime";
import EditIcon from "@mui/icons-material/Edit";
import {updateNote} from "../../../repository/noteRepository";
import {updateNotes} from "../../../store/slices/noteSlice";
const InterimPaymentsTable = () => {
	const {id} = useParams()
	const {interimPayments} = useBillGenerator(id)
	const dispatcher = useDispatch()

	useEffect(()=>{
		if (interimPayments[0]?.reservation_id !== undefined && interimPayments[0]?.reservation_id !== parseInt(id)) {
			dispatcher(clearInterimPaymentState())
		}
		if (interimPayments.length <= 0) {
			getAllInterimPaymentsOfReservation(id)
				.then((res) => {
					dispatcher(addInterimPayments(res.data))
				})
		}
	}, [dispatcher, id, interimPayments])

	const handleDeleteInterimPayment = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {
				deleteInterimPayment(id)
					.then(() => {
						Swal.fire({
							title: "Deleted!",
							text: "Successfully Deleted",
							icon: "success"
						});
						dispatcher(deleteInterimPayments(id))
					})

					.catch(error => {
						console.error('Error deleting note:', error);
					});
			}
		});
	};

	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>All Interim Payments</h5>
					</div>
				</div>
				<div className="row reservation-section-table px-2">
					<table className="table table-striped table-sm table-hover">
						<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Amount</th>
							<th scope="col">Date</th>
							<th scope="col">Action</th>
						</tr>
						</thead>
						<tbody>
							{interimPayments?.map((interimPayment, index) =>
								<tr key={index}>
									<th scope="row">{interimPayment.id}</th>
									<td>{interimPayment.interim_payment}</td>
									<td>{formatTime(interimPayment.created_at)}</td>
									<td>
										<ButtonGroup size="small">
											<IconButton color="success" size="small"
														onClick={() => handleUpdateInterimPayment(interimPayment.id, interimPayment.interim_payment,interimPayment.reservation_id)}>
												<EditIcon/>
											</IconButton>
											<IconButton sx={{color: "red"}} size="small"
														onClick={() => handleDeleteInterimPayment(interimPayment.id)}>
												<DeleteIcon/>
											</IconButton>
										</ButtonGroup>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default InterimPaymentsTable;