import {ITEM_TYPES} from "../../../../utils/constants";
import {useTranslation} from "react-i18next";
import DressSelectBox from "./DressSelectBox";
import SelectBestManPageboyDresses from "./SelectBestManPageboyDresses";

const SelectingDressesView = ({dressSelections}) => {
	const groomDress = dressSelections.filter(dress => dress.item.item_type === ITEM_TYPES.GROOM.ALL_CAP)
	const bestmenDresses = dressSelections.filter(dress => dress.item.item_type === ITEM_TYPES.BESTMAN.ALL_CAP)
	const pageboyDresses = dressSelections.filter(dress => dress.item.item_type === ITEM_TYPES.PAGEBOY.ALL_CAP)

	return (
		<div className={'col-12 col-md-6 p-0 px-md-2'}>
			<div className="tab-content-container" style={{maxHeight: "100%"}}>
				<div className={'row mb-2'}>
					<h5 className={'col'}>Selected Dresses</h5>
				</div>

				{groomDress.map((dress, index) => <SelectedDress key={index} type={"groom"} dress={dress}/>)}
				{bestmenDresses.map((dress, index) => <SelectedDress key={index} type={"bestman"} dress={dress} index={index}/>)}
				{pageboyDresses.map((dress, index) => <SelectedDress key={index} type={"pageboy"} dress={dress} index={index}/>)}

				<div className={'row mb-2 pt-3'}>
					<h5 className={'col'}>Not Selected Dresses</h5>
				</div>

				{groomDress.length === 0 ? <DressSelectBox type={"groom"}/> : null}
				<SelectBestManPageboyDresses minusBestman={bestmenDresses.length} minusPageboy={pageboyDresses.length}/>
			</div>
		</div>
	)
}

export default SelectingDressesView

const SelectedDress = ({type, dress, index}) => {
	const {t} = useTranslation()

	return (
		<div className="row mb-3">
			<div className="col-3">
				{t(ITEM_TYPES[type.toUpperCase()].ALL_SIM)}{index!=null?" - "+(index+1):null}
			</div>
			<div className="row col-9">
				<div className="col-10 theme-colored-text">
					{dress?.item.item_code} - {dress?.item.item_name}
				</div>
				<div className="col-2">
					<button className={'btn btn-primary btn-sm'}>Edit</button>
				</div>
			</div>
		</div>
	)
}