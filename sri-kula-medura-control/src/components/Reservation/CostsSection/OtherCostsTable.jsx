import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {ButtonGroup} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {addCosts, clearCostState, selectAllCost} from "../../../store/slices/costSlice";
import {useDispatch, useSelector} from "react-redux";
import {getAllOtherCostByReservation} from "../../../repository/costRepository";

const OtherCostsTable = (props) => {
	const {id} = useParams()
	const costs = useSelector(selectAllCost)
	const dispatcher = useDispatch()

	useEffect(()=>{
		if (costs[0]?.reservation_id !== undefined && costs[0]?.reservation_id !== parseInt(id)) {
			dispatcher(clearCostState())
		}
		if (costs.length <= 0) {
			getAllOtherCostByReservation(id)
				.then((res) => {
					dispatcher(addCosts(res.data))
				})
		}
	}, [id,dispatcher,costs])
	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>All Other Costs</h5>
					</div>
				</div>
				<div className="row reservation-section-table px-2">
					<table className="table table-striped table-sm table-hover">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">amount</th>
							<th scope="col">Reason</th>
							<th scope="col">Date</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
					{costs?.map((cost,index)=>
						<tr key={index}>
							<th scope="row">{cost.id}</th>
							<td>{cost.other_cost}</td>
							<td>{cost.reason}</td>
							<td>{cost.created_at}</td>
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

export default OtherCostsTable;