import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useParams} from "react-router-dom";
import useBillGenerator from "../../../hooks/useBillGenerator";
import {useEffect} from "react";
import {
	addAdditionalPayments,
	clearAdditionalPaymentState,
	deletePayments, updatePayments
} from "../../../store/slices/additionalPaymentSlice";
import {
	deletePayment,
	getAllAdditionalPaymentsByReservation,
	updatePayment
} from "../../../repository/additionalPaymentRepository";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import {formatTime} from "../../../utils/formatTime";


const AdditionalPaymentsTable = () => {
	const {id} = useParams()
	const {additionalPayments} = useBillGenerator(id)
	const dispatcher = useDispatch()

	useEffect(() => {
		if (additionalPayments[0]?.reservation_id !== undefined && additionalPayments[0]?.reservation_id !== parseInt(id)) {
			dispatcher(clearAdditionalPaymentState())
		}
		if (additionalPayments.length <= 0) {
			getAllAdditionalPaymentsByReservation(id)
				.then((res) => {
					dispatcher(addAdditionalPayments(res.data))
				})
				.catch(err => console.log(err))
		}
	}, [id, dispatcher, additionalPayments])

	async function handleUpdate(id,payment,reason,reservation_id) {
		const { value: formValues } = await Swal.fire({
			title: "Multiple inputs",
			html: `
			<label for="Payment">Reason</label>
    		<input id="swal-input1" class="swal2-input" placeholder="${reason}" label="Amount">
    		<label for="Payment">Payment</label>
 			<input id="swal-input2" class="swal2-input" placeholder="${payment}" label="Reason">
  `,
			focusConfirm: false,
			preConfirm: () => {
				return [
					document.getElementById("swal-input1").value,
					document.getElementById("swal-input2").value
				];
			}
		});
		if (formValues) {
			Swal.fire(JSON.stringify(formValues));
			const payment = formValues[1]
			const reason = formValues[0]
			updatePayment(id, payment, reason, reservation_id)
				.then((res)=>{
					Swal.fire({
						title: "Updated!",
						text: "Successfully Updated",
						// Your file has been deleted.
						icon: "success"
					});
					dispatcher(updatePayments({id, reason,payment, reservation_id}))
				})
		}else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Update Failed",
			});
		}

	}
	const handleDelete = (id) => {
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
				deletePayment(id)
					.then(() => {
						Swal.fire({
							title: "Deleted!",
							text: "Successfully Deleted",
							// Your file has been deleted.
							icon: "success"
						});
						dispatcher(deletePayments(id))
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
						<h5 className={'col'}>All Additional Charges</h5>
					</div>
				</div>
				<div className="row reservation-section-table table-hover px-2">
					<table className="table table-striped table-sm">
						<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Amount</th>
							<th scope="col">Reason</th>
							<th scope="col">Date</th>
							<th scope="col">Action</th>
						</tr>
						</thead>
						<tbody>
						{additionalPayments?.map((additionalPayment, index) =>
							<tr key={index}>
								<th scope="row">{additionalPayment.id}</th>
								<td>{additionalPayment.payment}</td>
								<td>{additionalPayment.reason}</td>
								<td>{formatTime(additionalPayment.created_at)}</td>
								<td>
									<ButtonGroup size="small">
										<IconButton color="success" size="small"
													onClick={() => handleUpdate(
														additionalPayment.id,
														additionalPayment.payment,
														additionalPayment.reason ,
														additionalPayment.reservation_id)
										}>
											<EditIcon/>
										</IconButton>
										<IconButton sx={{color: "red"}} size="small"
													onClick={() => handleDelete(additionalPayment.id)}>
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

export default AdditionalPaymentsTable;