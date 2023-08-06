import {useRef, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import './Reservation.css'

const ReservationDetails = ({title, value, amountToPaid, handleClick, allowEditValue}) => {
	return (<>
			<div className="row text-details">
				<div className="col-5 col-xl-4 my-1 my-xl-0">
					{title}
				</div>
				<div
					className={`col-7 col-xl-8 my-1 my-xl-0 text-end text-md-start text-lg-end text-xl-start ${amountToPaid ? "amount-to-be-paid" : "text-secondary "}`}>
					{amountToPaid ? "Rs. " : null}
					<ReservationDetailValue title={title} value={value}/>
				</div>
			</div>
		</>);
}

export default ReservationDetails;

const ReservationDetailValue = ({title, value}) => {
	const [allowEditValue, setAllowEditValue] = useState(false)
	const valueRef = useRef("");

	const handleClick = () => {
		setAllowEditValue(true)
	}

	// TODO: Implement this function
	const handleSubmissionOfValue = () => {
		console.log(valueRef.current.value)
	}

	if (value) {
		return (<span className={'fw-bold'}>{value}</span>)
	}

	if (allowEditValue) {
		return (<div className="input-group">
				<input ref={valueRef} type="text" className="form-control-sm" placeholder={`Add ${title}`}/>
				<button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleSubmissionOfValue}>Submit</button>
				<button className="btn btn-sm btn-outline-secondary" type="button"
				        onClick={() => setAllowEditValue(false)}><CloseIcon sx={{fontSize: "medium"}}/></button>
			</div>)
	}

	return (<span onClick={handleClick} className={'reservation-detail-before-edit'}>
			<abbr title={`Click to edit ${title}`}>Click to edit</abbr>
		</span>)
}