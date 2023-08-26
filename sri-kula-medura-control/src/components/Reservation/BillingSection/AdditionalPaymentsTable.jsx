import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useParams} from "react-router-dom";
import useBillGenerator from "../../../hooks/useBillGenerator";

const AdditionalPaymentsTable = () => {
	const {id} = useParams()
	const {additionalPayments} = useBillGenerator(id)

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
								<td>{additionalPayment.created_at}</td>
								<td>
									<ButtonGroup size="small">
										<IconButton color="success" size="small">
											<EditIcon/>
										</IconButton>
										<IconButton sx={{color: "red"}} size="small">
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