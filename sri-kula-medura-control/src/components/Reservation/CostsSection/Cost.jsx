import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import SectionDetails from "../SectionDetails";
import OtherCostsSection from "./OtherCostsSection";
import OtherCostsTable from "./OtherCostsTable";

const Cost = (props) => {
	const [editingStatus, setEditingStatus] = useState(false)

	return (<>
		<div className="row">
			<div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
				<div className="tab-content-container">
					<did className="row">
						<div className={'row mb-3'}>
							<h5 className={'col'}>Costs</h5>
							<div className={'col text-end'}>
								<button className={`btn btn-${editingStatus ? "warning" : "primary"} btn-sm`}
								        onClick={() => setEditingStatus(pre => !pre)}>{editingStatus ? "Cancel" : "Edit Costs"}</button>
							</div>
						</div>

						{editingStatus ? <EditingCost/> : <ViewingCost/>}
					</did>
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
	const [transportCost, setTransportCost] = useState(null)
	const [salaryCost, setSalaryCost] = useState(null)
	const [cleaningCost, setCleaningCost] = useState(null)
	const [depreciationCost, setDepreciationCost] = useState(null)

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
				<button className={'btn btn-success w-25'}>Submit</button>
			</div>
		</div>
	</>)
}

const ViewingCost = () => {
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