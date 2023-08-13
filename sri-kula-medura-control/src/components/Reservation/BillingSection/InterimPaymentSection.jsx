import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const InterimPaymentSection = (props) => {
	const {t} = useTranslation();
	const [interimPayment, setInterimPayment] = useState()

	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>{t('interimPayment')}</h5>
						<span className={'text-secondary small'}><span className={'text-danger'}>* </span>{t('interimText')}</span>
					</div>
				</div>
				<div className="row mt-4">
					<div className="row mb-3">
						<p className={'col-3'}>{t('amount')}</p>
						<div className={'col-9'}>
							<FormControl sx={{ width: "100%" }} size="small">
								<TextField
									label={t('amount')}
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
							<button className={'btn btn-success w-50 w-md-25'}>{t('submit')}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InterimPaymentSection;