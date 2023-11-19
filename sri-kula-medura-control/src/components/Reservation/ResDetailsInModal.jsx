import {Link} from "react-router-dom";

const ResDetailsInModal = ({reservationId, billNumber, cusName, cancelled, postponed, postponedDate}) => {
	return (<>
		<Link
			className={`badge mb-2 res-detail-link ${cancelled ? "cancelled-reservation" : postponed ? "postponed-reservation" : "normal-reservation"}`}
			to={`reservation/${reservationId}`}>{billNumber}</Link> <span className={'text-secondary'}> | {cusName} | </span> {cancelled ?
		<span className="text-danger">cancelled</span> : null} {postponed ?
		<span className="text-danger">{postponedDate}</span> : null}<br/>
	</>);
}

export default ResDetailsInModal;