import RoundedImage from "../RoundedImage/RoundedImage";
import useravatar from "../../assets/chat/patient-thumb-02.jpg";
import ReservationDetails from "./ReservationDetails";
import ReservationTabs from "./ReservationTabs";
import UserDetails from "./UserDetails";

const Reservation = (props) => {
	return (
		<>
		<div className={`row p-1 p-lg-3`}>
			<div className="col-12 col-lg-6 row mb-2 mb-md-0">
				<div className="col-12 col-sm-3  text-center">
					<RoundedImage width={100} userAvatar={useravatar} className={'image-width mb-3 mb-md-0'}/>
				</div>
				<div className="col-12 col-sm-9 ps-3 mt-2">
					<h3>{props.customer.name}</h3>
					<div className={`small`}>
						<p className={'lh-lg'}>
							<UserDetails address={props.customer.address} billNumber={props.bill_number}
							             bookedOn={props.created_at} branch={props.branch_name}/>
						</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-6 row left-border">
				<ReservationDetails title={"Amount to be paid"} value={"17,874.00"} amountToPaid={true}/>
				<ReservationDetails title={"Phone 1"} value={props.customer.mobile_no1}/>
				<ReservationDetails title={"Phone 2"} value={"830-673-9495"}/>
				<ReservationDetails title={"Function Date"} value={props.function_date}/>
				<ReservationDetails title={"Function Place"} value={props.function_place}/>
			</div>
		</div>
		<div>
			<ReservationTabs/>
		</div>
		</>
	);
}

export default Reservation;

