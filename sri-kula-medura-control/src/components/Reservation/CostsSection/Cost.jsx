import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState} from "react";
import SectionDetails from "../SectionDetails";
import OtherCostsSection from "./OtherCostsSection";
import OtherCostsTable from "./OtherCostsTable";
import {saveOtherCost} from "../../../store/slices/otherCostSlice";
import notify from "../../../utils/notify";
import {storeCost} from "../../../repository/costRepository";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const Cost = (props) => {
	const [editingStatus, setEditingStatus] = useState(false)

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
						{editingStatus ? <EditingCost/> : <ViewingCost/>}
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

const EditingCost = () => {
	const {id} = useParams()
	const [transport, setTransport] = useState(null)
	const [salary, setSalary] = useState(null)
	const [cleaning, setCleaning] = useState(null)
	const [depreciation, setDepreciation] = useState(null)
	const dispatcher = useDispatch()
	// const isSubmitDisabled = !transport || !salary || !cleaning || !depreciation;

	const handleSubmit = () => {
		storeCost(id, transport,salary,cleaning,depreciation )
			.then(response => {
				if (response.status === 200) {
					dispatcher(saveOtherCost({ ...response.data }));
					notify(1, "Other Cost Added Successfully");
				} else {
					notify(0, "Other Cost not saved");
				}
			})
			.catch(error => {
				console.error("Error submitting Other Cost:", error);
				notify(0, "An error occurred while saving Other Cost");
			});
	};

	return (<>
		<div className="row mb-3">
			<p className={'col-3'}>Transport</p>
			<div className={'col-9'}>
				<FormControl sx={{width: "100%"}} size="small">
					<TextField
						label="Transport"
						id="transport"
						size="small"
						value={transport}
						onChange={(e) => setTransport(e.target.value)}
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
						value={salary}
						onChange={(e) => setSalary(e.target.value)}
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
						value={cleaning}
						onChange={(e) => setCleaning(e.target.value)}
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
						value={depreciation}
						onChange={(e) => setDepreciation(e.target.value)}
					/>
				</FormControl>
			</div>
		</div>

		<div className="row mb-3">
			<div className="col-3"></div>
			<div className={'col-9 text-end'}>
				<button className={'btn btn-success w-50 w-md-25'}
						onClick={handleSubmit}
						// disabled={isSubmitDisabled}
				>Submit</button>
			</div>
		</div>
	</>)
}

const ViewingCost = ({id}) => {

	return (<>
			<SectionDetails topic={'Transport'} value={'Rs. 17,874.00'}/>
			<SectionDetails topic={'Salary'} value={'Rs. 17,874.00'}/>
			<SectionDetails topic={'Cleaning'} value={'17,874.00'}/>
			<SectionDetails topic={'Depreciation'} value={'17,874.00'}/>
			<SectionDetails topic={'Other'} value={'17,874.00'}/>
			<hr className={'mt-1'}/>
			<SectionDetails topic={'Total'} value={'17,874.00'}/>
		</>)
}