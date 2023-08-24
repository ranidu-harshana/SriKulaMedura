import {useDispatch, useSelector} from "react-redux";
import {
	addDressSelections,
	clearDressSelectionState,
	selectAllDressSelection
} from "../store/slices/dressSelectionSlice";
import {useEffect} from "react";
import {getAllByReservation} from "../repository/dressSelectionRepository";

const UseGetOrSetDressSelections = (id) => {
	const dressSelections = useSelector(selectAllDressSelection)
	const dispatcher = useDispatch()

	useEffect(() => {
		if (dressSelections[0]?.reservation_id !== undefined && dressSelections[0]?.reservation_id !== parseInt(id)) {
			dispatcher(clearDressSelectionState())
		}
		if (dressSelections.length <= 0) {
			getAllByReservation(id)
				.then((response) => dispatcher(addDressSelections(response.data)))
				.catch(err => console.log(err));
		}
	}, [dispatcher, dressSelections, id])

	return dressSelections
}

export default UseGetOrSetDressSelections;