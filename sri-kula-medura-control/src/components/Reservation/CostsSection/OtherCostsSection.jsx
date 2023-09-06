import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import notify from "../../../utils/notify";
import {saveOtherCost} from "../../../store/slices/otherCostSlice";
import {storeOtherCost} from "../../../repository/otherCostRepository";

const OtherCostsSection = (props) => {
	const [otherCost, setOtherCost] = useState('')
	const {id} = useParams()
	const [reason ,setReason] = useState('')
	const dispatcher = useDispatch()
	const isSubmitDisabled = !otherCost || !reason;

	const handleSubmit = () => {
		storeOtherCost(id, otherCost, reason)
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

	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>Other Costs</h5>
						<span className={'text-secondary small'}><span className={'text-danger'}>* </span>Other costs will apply to the total bill</span>
					</div>
				</div>
				<div className="row mt-4">
					<div className="row mb-3">
						<p className={'col-3'}>Amount</p>
						<div className={'col-9'}>
							<FormControl sx={{ width: "100%" }} size="small">
								<TextField
									label="Amount"
									id="amount"
									size="small"
									value={otherCost}
									onChange={(e) => setOtherCost(e.target.value)}
								/>
							</FormControl>
						</div>
					</div>
					<div className="row mb-3">
						<p className={'col-3'}>Reason</p>
						<div className={'col-9'}>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
									  value={reason}
									  onChange={(e)=>setReason(e.target.value)}
							></textarea>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-3"></div>
						<div className="col-9 text-end">
							<button className={'btn btn-success w-50 w-md-25'}
									onClick={handleSubmit}
									disabled={isSubmitDisabled}
							>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OtherCostsSection;