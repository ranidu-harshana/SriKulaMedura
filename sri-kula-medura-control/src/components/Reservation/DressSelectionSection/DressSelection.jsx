import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import FormControl from "@mui/material/FormControl";
import InterimPaymentsTable from "../BillingSection/InterimPaymentsTable";
import {useSelector} from "react-redux";
import AutoSuggestTextBox from "../../AutoSuggestTextBox/AutoSuggestTextBox";
import {useRef} from "react";
import {useParams} from "react-router-dom";
import {reservationSelector, selectByIdReservation} from "../../../store/slices/reservationSlice";
import {firtsLetterTOUppercase} from "../../../utils/helpers";

const DressSelection = (props) => {
	const {id} = useParams()
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)

	const reservation = reservationCurr ? reservationCurr : reservationAlt

	const dressSelectionsRef = useRef({})

	const bestManArr = []
	const pageBoyArr = []
	for (let i=0; i < reservation.no_of_bestmen; i++) {
		bestManArr.push(<DressSelectBoxes type={"bestman"} dressSelectionsRef={dressSelectionsRef} key={i} index={i}/>)
	}

	for (let i=0; i < reservation.no_of_pageboys; i++) {
		pageBoyArr.push(<DressSelectBoxes type={"pageboy"} dressSelectionsRef={dressSelectionsRef} key={i} index={i}/>)
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
						<DressSelectBoxes type={"groom"} dressSelectionsRef={dressSelectionsRef}/>
						{bestManArr}
						{pageBoyArr}
						<div className="row col-12 text-end">
							<p>
								<button className={'btn btn-success'} onClick={()=>{
									// TODO: save dress selection
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

const DressSelectBoxes = ({type, dressSelectionsRef, index}) => {
	return (
		<div className="row">
			<div className="row mb-2">
				<p className={'col-3 d-none d-md-block'}>{firtsLetterTOUppercase(type)}{index>=0?` - ${index}`:null}</p>
				<div className={'col-12 col-md-9'}>
					<FormControl sx={{ width: "100%" }} size="small">
						<AutoSuggestTextBox textBoxRef={(el) => {
							dressSelectionsRef.current[`${type}${index>0?index:null}`] = el
						}} key={index-1} type={type} index={index}/>
					</FormControl>
				</div>
			</div>
		</div>
	)
}
