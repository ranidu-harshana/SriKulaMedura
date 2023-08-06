import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import InterimPaymentsTable from "../BillingSection/InterimPaymentsTable";
import {useSelector} from "react-redux";
import {useRef} from "react";
import {useParams} from "react-router-dom";
import {reservationSelector, selectByIdReservation} from "../../../store/slices/reservationSlice";
import DressSelectBox from "./DressSelect/DressSelectBox";

const DressSelection = (props) => {
	const {id} = useParams()
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const reservation = reservationCurr ? reservationCurr : reservationAlt

	const dressSelectionsRef = useRef({})

	const bestManArr = []
	const pageBoyArr = []
	for (let i=0; i < reservation.no_of_bestmen; i++) {
		bestManArr.push(<DressSelectBox type={"bestman"} dressSelectionsRef={dressSelectionsRef} key={i} index={i}/>)
	}

	for (let i=0; i < reservation.no_of_pageboys; i++) {
		pageBoyArr.push(<DressSelectBox type={"pageboy"} dressSelectionsRef={dressSelectionsRef} key={i} index={i}/>)
	}

	return (
		<>
			<div className="row px-2">
				<div className="tab-content-container pt-3 pb-0" style={{minHeight: 0}}>
					<div className="row col-12 col-md-8">
						<NoOfGroomsPageboys/>
					</div>
				</div>
			</div>

			<div className="row mt-3">
				<div className={'col-12 col-md-6 p-0 px-md-2'}>
					<div className="tab-content-container">
						<div className={'row mb-2'}>
							<h5 className={'col'}>Select Dresses</h5>
						</div>
						<DressSelectBox type={"groom"} dressSelectionsRef={dressSelectionsRef}/>
						{bestManArr}
						{pageBoyArr}
						<div className="row col-12 text-end">
							<p>
								<button className={'btn btn-success'} onClick={()=>{
									// TODO: implement this
									console.log(dressSelectionsRef.current["groom"].getInput().value);
								}}>Submit</button>
							</p>
						</div>
					</div>
				</div>

				<div className={'col-12 col-md-6 p-0 px-md-2 mt-3 mt-md-0'}>
					<div className="tab-content-container">
						<InterimPaymentsTable />
					</div>
				</div>
			</div>
		</>
	);
}

export default DressSelection;