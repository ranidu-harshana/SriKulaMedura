import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useParams} from "react-router-dom";
import useBillGenerator from "../../../hooks/useBillGenerator";

const InterimPaymentsTable = () => {
	const {id} = useParams()
	const {interimPayments} = useBillGenerator(id)

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
									<td>{interimPayment.created_at}</td>
									<td>
										<ButtonGroup size="small">
											<IconButton color="success" size="small">
												<EditIcon />
											</IconButton>
											<IconButton sx={{color:"red"}} size="small">
												<DeleteIcon />
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