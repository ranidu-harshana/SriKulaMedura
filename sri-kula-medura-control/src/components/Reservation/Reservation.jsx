import RoundedImage from "../RoundedImage/RoundedImage";
import useravatar from "../../assets/chat/userdefault.png";
import ReservationDetails from "./ReservationDetails";
import ReservationTabs from "./ReservationTabs";
import UserDetails from "./UserDetails";
import {useDispatch, useSelector} from "react-redux";
import {
	addSingleReservation,
	reservationSelector,
	selectByIdReservation,
	updateReservation
} from "../../store/slices/reservationSlice";
import {useEffect, useState} from "react";
import {cancelReservation, getReservation, postponeReservation} from "../../repository/reservationRepository";
import BSModal from "../BSModal/BSModal";
import notify from "../../utils/notify";

const Reservation = ({id}) => {
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const dispatcher = useDispatch()

	const [showCancelResModel, setShowCancelResModel] = useState(false);
	const [showPostponeResModel, setShowPostponeResModel] = useState(false);

	const handleCancelResModalClose = () => setShowCancelResModel(false);
	const handleCancelResModalShow = () => setShowCancelResModel(true);

	const handlePostponeResModalClose = () => setShowPostponeResModel(false);
	const handlePostponeResModalShow = () => setShowPostponeResModel(true);

	const [postponeDate, setPostponeDate] = useState("");

	useEffect(() => {
		if(!reservationCurr) {
			getReservation(id)
				.then((response) => {
					dispatcher(addSingleReservation({...response.data}))
				})
				.catch(error => {
					console.log("ERROR: " + error)
				})
		}
	}, [dispatcher, id, reservationCurr]);

	const reservation = reservationCurr ? reservationCurr : reservationAlt

	return (
		<>
		<div className={`row p-1 p-lg-3`}>
			<div className="col-12 col-lg-5 row mb-2 mb-md-0">
				<div className="col-12 col-sm-3  text-center">
					<RoundedImage width={100} userAvatar={useravatar} className={'image-width mb-3 mb-md-0'}/>
				</div>
				<div className="col-12 col-sm-9 ps-3 mt-2">
					<h3>{reservation.customer.name} {reservation.status ? <span class="badge rounded-pill bg-danger"> </span> :
						<span className="badge rounded-pill bg-success"> </span>}</h3>
					<div className={`small`}>
						<p className={'lh-lg'}>
							<UserDetails address={reservation.customer.address} billNumber={reservation.bill_number}
							             bookedOn={reservation.created_at} branch={reservation.branch_name}/>
						</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-5 row left-border">
				{/*<ReservationDetails title={"Amount to be paid"} value={convertNumberToPriceFormat(reservation.amount_payable == null ? 0 : reservation.amount_payable)} amountToPaid={true}/>*/}
				<ReservationDetails title={"Phone 1"} value={reservation.customer.mobile_no1}/>
				<ReservationDetails title={"Phone 2"} value={reservation.customer.mobile_no2}/>
				<ReservationDetails title={"Function Date"} value={reservation.function_date}/>
				<ReservationDetails title={"Function Place"} value={reservation.function_place}/>
			</div>
			<div className="col-lg-2">
				{
					reservation.status ? ""
						// <button onClick={handleCancelResModalShow} className={'btn btn-sm btn-secondary'}>Re Schedule</button>
						: <button onClick={handleCancelResModalShow} className={'btn btn-sm btn-danger'}>Cancel</button>
				}

				<button onClick={handlePostponeResModalShow} className={'btn btn-sm btn-warning'}>Postpone</button>
				<button className={'btn btn-sm btn-primary'}>Edit</button>

				<BSModal show={showCancelResModel} handleClose={handleCancelResModalClose} modalTitle={"Cancel Reservation"}>
					Are you sure you want to cancel this reservation?
					<div className="row">
						<div className="col-6"></div>
						<div className=" col-6 p-3 ">
							<button className={'btn btn-sm btn-success me-2'} onClick={() => {
								cancelReservation(id)
									.then(res => {
										dispatcher(updateReservation({id: id, changes: {status: true}}))
										notify(1, "Reservation cancelled");
									}).catch(err => {notify(0, "Failed");})
							}}>Yes</button>
							<button className={'btn btn-sm btn-secondary '} onClick={handleCancelResModalClose}>No</button>
						</div>
					</div>

				</BSModal>

				<BSModal show={showPostponeResModel} handleClose={handlePostponeResModalClose} modalTitle={"Postpone Reservation"}>
					Postpone Date <br/>
					<div>
						<input type="date" className={"form-control mt-2"} value={postponeDate} onChange={(e) => setPostponeDate(e.target.value)}/>
						<div className={"text-end mt-2"}>
							<button className={'btn btn-sm btn-success'} onClick={() => {
								postponeReservation(id, postponeDate)
									.then(res => {
										dispatcher(updateReservation({id: id, changes: {before_postpone_date: postponeDate}}))
										notify(1, "Reservation postponed");
									}).catch(err => {notify(0, "Failed");})
							}}>Submit</button>
						</div>
					</div>

				</BSModal>
			</div>
		</div>
		<div>
			<ReservationTabs/>
		</div>
		</>
	);
}

export default Reservation;

