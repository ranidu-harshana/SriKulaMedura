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
					<h3>Cristina Groves</h3>
					<div className={`small`}>
						<p className={'lh-lg'}>
							<UserDetails address={'99921 Chadrick Radial New Edmund, RI 26868'} billNumber={props.bill_number} bookedOn={'2023-07-09 17:02:17'} branch={'Sri Kula Medura Colombo'}/>
						</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-6 row left-border">
				<ReservationDetails title={"Amount to be paid"} value={"17,874.00"} amountToPaid={true}/>
				<ReservationDetails title={"Phone 1"} value={"1-509-261-5743"}/>
				<ReservationDetails title={"Phone 2"} value={"830-673-9495"}/>
				<ReservationDetails title={"Function Date"} value={"2023-07-02"}/>
				<ReservationDetails title={"Function Place"} value={"355 Kiara Port Apt. 374 Lilianeside, ID 91685-1487"}/>
			</div>
		</div>
		<div>
			<ReservationTabs/>
		</div>
		</>
	);
}

export default Reservation;

