import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {ButtonGroup} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {clearCostState} from "../../../store/slices/costSlice";

import {useDispatch, useSelector} from "react-redux";
import {getAllOtherCostByReservation} from "../../../repository/otherCostRepository";
import {addOtherCost, selectAllOtherCosts} from "../../../store/slices/otherCostSlice";

const OtherCostsTable = (props) => {
	const {id} = useParams()
	const other_costs = useSelector(selectAllOtherCosts)
	const dispatcher = useDispatch()

	useEffect(()=>{
		if(other_costs[0]?.reservation_id !== undefined && other_costs[0]?.reservation_id !== parseInt(id)){
			dispatcher(clearCostState())
		}
		if(other_costs.length <= 0){
			getAllOtherCostByReservation(id)
				.then((res) =>{
					dispatcher(addOtherCost(res.data))
				})
		}
	},[dispatcher,id,other_costs])

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
					{other_costs?.map((other_cost,index)=>
						<tr key={index}>
							<th scope="row">{other_cost.id}</th>
							<td>{other_cost.other_cost}</td>
							<td>{other_cost.reason}</td>
							<td>{other_cost.created_at}</td>
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