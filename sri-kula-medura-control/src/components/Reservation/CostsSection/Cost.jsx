import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import SectionDetails from "../SectionDetails";
import OtherCostsSection from "./OtherCostsSection";
import OtherCostsTable from "./OtherCostsTable";
import {getAllMainCostByReservation, storeMainCost} from "../../../repository/costRepository";
import {useParams} from "react-router-dom";
import notify from "../../../utils/notify";

const Cost = () => {
	const [editingStatus, setEditingStatus] = useState(false)
	const [cost, setCost] = useState({})
	const {id} = useParams()

	useEffect(() => {
		getAllMainCostByReservation(id)
			.then(res => {
				setCost(res.data)
			})
	})

	return (<>
		<div className="row">
			<div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
				<div className="tab-content-container">
					<div className="row">
						<div className={'row mb-3'}>
							<h5 className={'col'}>Costs</h5>
							<div className={'col text-end'}>
								<button className={`btn btn-${editingStatus ? "warning" : "primary"} btn-sm`}
								        onClick={() => setEditingStatus(pre => !pre)}>{editingStatus ? "Cancel" : "Edit Costs"}</button>
							</div>
						</div>
						{editingStatus ? <EditingCost cost={cost}/> : <ViewingCost cost={cost}/>}
					</div>
				</div>
			</div>

			<div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
				<OtherCostsSection />
			</div>
			<div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
				<OtherCostsTable />
			</div>
		</div>
	</>);
}

export default Cost;

const EditingCost = ({cost}) => {
	const [transportCost, setTransportCost] = useState(cost?.transport)
	const [salaryCost, setSalaryCost] = useState(cost?.salary)
	const [cleaningCost, setCleaningCost] = useState(cost?.cleaning)
	const [depreciationCost, setDepreciationCost] = useState(cost?.depreciation)

	return (<>
		<div className="row mb-3">
			<p className={'col-3'}>Transport</p>
			<div className={'col-9'}>
				<FormControl sx={{width: "100%"}} size="small">
					<TextField
						label="Transport"
						id="transport"
						size="small"
						value={transportCost}
						onChange={(e) => setTransportCost(e.target.value)}
					/>
				</FormControl>
			</div>
		</div>

		<div className="row mb-3">
			<p className={'col-3'}>Salary</p>
			<div className={'col-9'}>
				<FormControl sx={{width: "100%"}} size="small">
					<TextField
						label="Salary"
						id="salary"
						size="small"
						value={salaryCost}
						onChange={(e) => setSalaryCost(e.target.value)}
					/>
				</FormControl>
			</div>
		</div>

		<div className="row mb-3">
			<p className={'col-3'}>Cleaning</p>
			<div className={'col-9'}>
				<FormControl sx={{width: "100%"}} size="small">
					<TextField
						label="Cleaning"
						id="cleaning"
						size="small"
						value={cleaningCost}
						onChange={(e) => setCleaningCost(e.target.value)}
					/>
				</FormControl>
			</div>
		</div>

		<div className="row mb-3">
			<p className={'col-3'}>Depreciation</p>
			<div className={'col-9'}>
				<FormControl sx={{width: "100%"}} size="small">
					<TextField
						label="Depreciation"
						id="depreciation"
						size="small"
						value={depreciationCost}
						onChange={(e) => setDepreciationCost(e.target.value)}
					/>
				</FormControl>
			</div>
		</div>

		<div className="row mb-3">
			<div className="col-3"></div>
			<div className={'col-9 text-end'}>
				<button className={'btn btn-success w-25'} onClick={() => {
					storeMainCost(cost.id, transportCost, salaryCost, cleaningCost, depreciationCost, cost.reservation_id)
						.then(() => {
							notify(1, " Cost Updated Successfully");
						}).catch(() => notify(0, " Cost Added failed"))
				}}>Submit</button>
			</div>
		</div>
	</>)
}

const ViewingCost = ({cost}) => {
	return (<>
			<SectionDetails topic={'Transport'} value={cost?.transport}/>
			<SectionDetails topic={'Salary'} value={cost?.salary}/>
			<SectionDetails topic={'Cleaning'} value={cost?.cleaning}/>
			<SectionDetails topic={'Depreciation'} value={cost?.depreciation}/>
			{/*<SectionDetails topic={'Other'} value={'17,874.00'}/>*/}
			<hr className={'mt-1'}/>
			<SectionDetails topic={'Total'} value={cost?.transport + cost?.salary + cost?.cleaning + cost?.depreciation}/>
		</>)
}