import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import notify from "../../../utils/notify";
import {saveAdditionalPayment} from "../../../store/slices/additionalPaymentSlice";
import {storeAdditionalPayment} from "../../../repository/additionalPaymentRepository";

const AdditionalPaymentSection = (props) => {
	const {id} = useParams()
	const [payment ,setPayment] = useState()
	const [reason ,setReason] = useState()
	const dispatcher = useDispatch()
	const isSubmitDisabled = !payment || !reason;

	const handleSubmit = () => {
		storeAdditionalPayment(id, payment, reason)
			.then(response => {
				if (response.status === 200) {
					dispatcher(saveAdditionalPayment({ ...response.data }));
					notify(1, "Additional Payment Added Successfully");
				} else {
					notify(0, "Additional Payment not saved");
				}
			})
			.catch(error => {
				console.error("Error submitting additional payment:", error);
				notify(0, "An error occurred while saving additional payment");
			});
	};

	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>Additional Charges</h5>
						<span className={'text-secondary small'}><span className={'text-danger'}>* </span>Additional charges will apply to the total bill</span>
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
									value={payment}
									onChange={(e)=>setPayment(e.target.value)}
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
							<button
								type="submit"
								className="btn btn-success"
								onClick={handleSubmit}
								disabled={isSubmitDisabled}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AdditionalPaymentSection;