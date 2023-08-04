import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InterimPaymentsTable from "../BillingSection/InterimPaymentsTable";
import {useSelector} from "react-redux";
import {selectAllDressSelection} from "../../../store/slices/dressSelectionSlice";

const DressSelection = (props) => {
	// const dressSelections = useSelector(selectAllDressSelection)

	return (
		<>
			<div className="row px-2">
				<div className="tab-content-container pt-3 pb-0" style={{minHeight: 0}}>
					<div className="row col-12 col-md-8">
						<NoOfGroomsPageboys/>
					</div>
				</div>
			</div>

			<div className="row mt-3">
				<div className={'col-12 col-md-6 p-0 px-md-2'}>
					<div className="tab-content-container">
						<div className={'row mb-2'}>
							<h5 className={'col'}>Select Dresses</h5>
						</div>
						<div className="row col-12">
							<div className="row mb-2">
								<p className={'col-3 d-none d-md-block'}>Groom</p>
								<div className={'col-10 col-md-8'}>
									<FormControl sx={{ width: "100%" }} size="small">
										<TextField
											label="Amount"
											id="amount"
											size="small"
											value={"additionalCharge"}
											// onChange={(e)=>setAdditionalCharge(e.target.value)}
										/>
									</FormControl>
								</div>
								<div className="col-2 col-md-1">
									<p><button className={'btn btn-success'}>Save</button></p>
								</div>
							</div>
						</div>
						<div className="row col-12">
							<div className="row mb-2">
								<p className={'col-3 d-none d-md-block'}>Bestman</p>
								<div className={'col-10 col-md-8'}>
									<FormControl sx={{ width: "100%" }} size="small">
										<TextField
											label="Amount"
											id="amount"
											size="small"
											value={"additionalCharge"}
											// onChange={(e)=>setAdditionalCharge(e.target.value)}
										/>
									</FormControl>
								</div>
								<div className="col-2 col-md-1">
									<p><button className={'btn btn-warning'}>Cancel</button></p>
								</div>
							</div>
						</div>
						<div className="row col-12">
							<div className="row mb-2">
								<p className={'col-3 d-none d-md-block'}>Pageboy</p>
								<div className={'col-10 col-md-8'}>
									<FormControl sx={{ width: "100%" }} size="small">
										<TextField
											label="Amount"
											id="amount"
											size="small"
											value={"additionalCharge"}
											// onChange={(e)=>setAdditionalCharge(e.target.value)}
										/>
									</FormControl>
								</div>
								<div className="col-2 col-md-1">
									<p><button className={'btn btn-primary'}>Edit</button></p>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div className={'col-12 col-md-6 p-0 px-md-2 mt-3 mt-md-0'}>
					<div className="tab-content-container">
						<InterimPaymentsTable />
					</div>
				</div>
			</div>
		</>
	);
}

export default DressSelection;