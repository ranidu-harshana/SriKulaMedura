import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import {useParams} from "react-router-dom";
import SelectingDressesView from "./DressSelect/SelectingDressesView";
import SelectedDressesView from "./DressSelect/SelectedDressesView";
import useGetOrSetDressSelections from "../../../hooks/useGetOrSetDressSelections";

const DressSelection = () => {
	const {id} = useParams()
	const dressSelections = useGetOrSetDressSelections(id)

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
						{/*<InterimPaymentsTable />*/}
					</div>
				</div>
			</div>
		</>
	);
}

export default DressSelection;