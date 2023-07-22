import {Link} from "react-router-dom";

const ResDetailsInModal = ({billNumber, cusName, cancelled, postponed}) => {
	return (<>
		<Link
			className={`badge mb-2 res-detail-link ${cancelled ? "cancelled-reservation" : postponed ? "postponed-reservation" : "normal-reservation"}`}
			to={''}>{billNumber}</Link> <span className={'text-secondary'}> | {cusName} | </span> {cancelled ?
		<span className="text-danger">cancelled</span> : null}<br/>
	</>);
}

export default ResDetailsInModal;