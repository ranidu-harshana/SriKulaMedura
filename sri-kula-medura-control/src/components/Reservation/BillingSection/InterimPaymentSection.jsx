import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {useDispatch} from "react-redux";

const InterimPaymentSection = (props) => {
	const [interimPayment, setInterimPayment] = useState()

	const dispatcher = useDispatch()
	const isSubmitDisabled = !interimPayment;
	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>Interim Payment</h5>
						<span className={'text-secondary small'}><span className={'text-danger'}>* </span>Interim payment will reduce from the total bill</span>
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
									value={interimPayment}
									onChange={(e)=>setInterimPayment(e.target.value)}
								/>
							</FormControl>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-3"></div>
						<div className="col-9 text-end">
							<button className={'btn btn-success w-50 w-md-25'}
									disabled={isSubmitDisabled}
							>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InterimPaymentSection;