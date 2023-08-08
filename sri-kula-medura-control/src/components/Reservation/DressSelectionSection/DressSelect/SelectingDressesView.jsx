import {useSelector} from "react-redux";
import {reservationSelector, selectByIdReservation} from "../../../../store/slices/reservationSlice";
import {selectedDressesByUserSelector} from "../../../../store/slices/dressSelectionSlice";
import DressSelectBox from "./DressSelectBox";
import {storeDressSelections} from "../../../../repository/dressSelectionRepository";

const SelectingDressesView = ({id}) => {
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const selectedDressesByUser = useSelector(selectedDressesByUserSelector)
	const reservation = reservationCurr ? reservationCurr : reservationAlt

	const bestManArr = []
	const pageBoyArr = []
	for (let i=0; i < reservation.no_of_bestmen; i++) {
		bestManArr.push(<DressSelectBox type={"bestman"} key={i} index={i}/>)
	}

	for (let i=0; i < reservation.no_of_pageboys; i++) {
		pageBoyArr.push(<DressSelectBox type={"pageboy"} key={i} index={i}/>)
	}

	return (
		<div className={'col-12 col-md-6 p-0 px-md-2'}>
			<div className="tab-content-container">
				<div className={'row mb-2'}>
					<h5 className={'col'}>Select Dresses</h5>
				</div>
				<DressSelectBox type={"groom"}/>
				{bestManArr}
				{pageBoyArr}
				<div className="row col-12 text-end">
					<p>
						<button className={'btn btn-success'} onClick={()=>{
							storeDressSelections(selectedDressesByUser)
								.then((response)=>{
									if(response.data.response) {
										
									}
								})
								.catch((err)=>console.error(err))
						}}>Submit</button>
					</p>
				</div>
			</div>
		</div>
	)
}

export default SelectingDressesView