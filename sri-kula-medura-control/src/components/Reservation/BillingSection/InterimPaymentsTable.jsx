import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const InterimPaymentsTable = (props) => {
	return (
		<>
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
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>2023-07-14</td>
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
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>2023-07-14</td>
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
					<tr>
						<th scope="row">3</th>
						<td>Larry the Bird</td>
						<td>2023-07-14</td>
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
					</tbody>
				</table>
			</div>
		</>
	);
}

export default InterimPaymentsTable;