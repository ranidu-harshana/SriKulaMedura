import {ITEM_TYPES} from "../../../../utils/constants";
import {useTranslation} from "react-i18next";

const SelectingDressesView = ({dressSelections}) => {
	const {t} = useTranslation()
	const groomDress = dressSelections.filter(dress => dress.item.item_type === ITEM_TYPES.GROOM.ALL_CAP)
	const bestmenDresses = dressSelections.filter(dress => dress.item.item_type === ITEM_TYPES.BESTMAN.ALL_CAP)
	const pageboyDresses = dressSelections.filter(dress => dress.item.item_type === ITEM_TYPES.PAGEBOY.ALL_CAP)

	return (
		<div className={'col-12 col-md-6 p-0 px-md-2'}>
			<div className="tab-content-container" style={{maxHeight: "100%"}}>
				<div className={'row mb-2'}>
					<h5 className={'col'}>Selected Dresses</h5>
				</div>

				<SelectedDress type={t(ITEM_TYPES.GROOM.ALL_SIM)} dress={groomDress}/>
			</div>
		</div>
	)
}

export default SelectingDressesView

const SelectedDress = ({type, dress}) => {
	return (
		<div className="row mb-3">
			<div className="col-3">
				{type}
			</div>
			<div className="row col-9">
				<div className="col-10 theme-colored-text">
					{dress[0]?.item.item_code} - {dress[0]?.item.item_name}
				</div>
				<div className="col-2">
					<button className={'btn btn-primary btn-sm'}>Edit</button>
				</div>
			</div>
		</div>
	)
}