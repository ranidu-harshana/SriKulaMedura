import {storeDressSelections} from "../../../../repository/dressSelectionRepository";
import {
	addDressSelections,
	resetAddSelectedDressByUser,
	selectedDressesByUserSelector
} from "../../../../store/slices/dressSelectionSlice";
import DressSelectBox from "./DressSelectBox";
import {useDispatch, useSelector} from "react-redux";
import {reservationSelector, selectByIdReservation} from "../../../../store/slices/reservationSlice";
import {useParams} from "react-router-dom";

const SelectBestManPageboyDresses = ({minusBestman, minusPageboy}) => {
	const {id} = useParams()
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const selectedDressesByUser = useSelector(selectedDressesByUserSelector)
	const dispatcher = useDispatch()

	const reservation = reservationCurr ? reservationCurr : reservationAlt

	const bestManArr = []
	const pageBoyArr = []
	for (let i=0; i < reservation.no_of_bestmen - minusBestman; i++) {
		bestManArr.push(<DressSelectBox type={"bestman"} key={i} index={i}/>)
	}

	for (let i=0; i < reservation.no_of_pageboys - minusPageboy; i++) {
		pageBoyArr.push(<DressSelectBox type={"pageboy"} key={i} index={i}/>)
	}

	console.log(selectedDressesByUser)

	return (
		<>
			{bestManArr}
			{pageBoyArr}
			<div className="row col-12 text-end">
				<p>
					<button className={'btn btn-success'} onClick={()=>{
						if (selectedDressesByUser.length > 0) {
							storeDressSelections(selectedDressesByUser, id)
								.then((response)=>{
									if(response.data.length > 0) {
										dispatcher(resetAddSelectedDressByUser())
										dispatcher(addDressSelections(response.data))
									}
								})
								.catch((err)=>console.error(err))
						}
					}}>Submit</button>
				</p>
			</div>
		</>
	);
}

export default SelectBestManPageboyDresses;