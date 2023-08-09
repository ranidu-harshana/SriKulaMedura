import RoundedImage from "../RoundedImage/RoundedImage";
import useravatar from "../../assets/chat/patient-thumb-02.jpg";
import ReservationDetails from "./ReservationDetails";
import ReservationTabs from "./ReservationTabs";
import UserDetails from "./UserDetails";
import {useDispatch, useSelector} from "react-redux";
import {addSingleReservation, reservationSelector, selectByIdReservation} from "../../store/slices/reservationSlice";
import {useMemo} from "react";
import {getReservation} from "../../repository/reservationRepository";
import {useTranslation} from "react-i18next";

const Reservation = ({id}) => {
	const {t} = useTranslation();
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const dispatcher = useDispatch()



	useMemo(() => {
		if(!reservationCurr) {
			getReservation(id)
				.then((response) => {
					dispatcher(addSingleReservation(response.data))
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
			<div className="col-12 col-lg-6 row mb-2 mb-md-0">
				<div className="col-12 col-sm-3  text-center">
					<RoundedImage width={100} userAvatar={useravatar} className={'image-width mb-3 mb-md-0'}/>
				</div>
				<div className="col-12 col-sm-9 ps-3 mt-2">
					<h3>{reservation.customer.name}</h3>
					<div className={`small`}>
						<p className={'lh-lg'}>
							<UserDetails address={reservation.customer.address} billNumber={reservation.bill_number}
							             bookedOn={reservation.created_at} branch={reservation.branch_name}/>
						</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-lg-6 row left-border">
				<ReservationDetails title={t('amounttobepaid')} value={"17,874.00"} amountToPaid={true}/>
				<ReservationDetails title={t('phone1')} value={reservation.customer.mobile_no1}/>
				<ReservationDetails title={t('phone2')} value={reservation.customer.mobile_no2}/>
				<ReservationDetails title={t('functionDate')} value={reservation.function_date}/>
				<ReservationDetails title={t('functionPlace')} value={reservation.function_place}/>
			</div>
		</div>
		<div>
			<ReservationTabs/>
		</div>
		</>
	);
}

export default Reservation;

