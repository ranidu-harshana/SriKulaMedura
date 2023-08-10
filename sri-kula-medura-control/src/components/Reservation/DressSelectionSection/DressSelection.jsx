import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import InterimPaymentsTable from "../BillingSection/InterimPaymentsTable";
import {useParams} from "react-router-dom";
import SelectingDressesView from "./DressSelect/SelectingDressesView";
import {useDispatch, useSelector} from "react-redux";
import {
	addDressSelections,
	clearDressSelectionState,
	selectAllDressSelection
} from "../../../store/slices/dressSelectionSlice";
import SelectedDressesView from "./DressSelect/SelectedDressesView";
import {useEffect} from "react";
import {getAllByReservation} from "../../../repository/dressSelectionRepository";

const DressSelection = (props) => {
	const {id} = useParams()

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
				{!dressSelections.length > 0 ? <SelectingDressesView reservation_id={id}/> : <SelectedDressesView dressSelections={dressSelections}/>}

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