import './Reservation.css'

const ReservationDetails = ({title, value, amountToPaid}) => {
	return (
		<>
			<div className="row text-details">
				<div className="col-5 col-xl-4 my-1 my-xl-0">
					{title}
				</div>
				<div className={`col-7 col-xl-8 my-1 my-xl-0 text-end text-md-start text-lg-end text-xl-start ${amountToPaid?"amount-to-be-paid":"text-secondary "}`}>
					{amountToPaid?"Rs. ":null}{value}
				</div>
			</div>
		</>
	);
}

export default ReservationDetails;