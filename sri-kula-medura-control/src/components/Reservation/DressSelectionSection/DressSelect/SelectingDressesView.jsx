import DressSelectBox from "./DressSelectBox";
import SelectBestManPageboyDresses from "./SelectBestManPageboyDresses";

const SelectingDressesView = () => {
	return (
		<div className={'col-12 col-md-6 p-0 px-md-2'}>
			<div className="tab-content-container">
				<div className={'row mb-2'}>
					<h5 className={'col'}>Select Dresses</h5>
				</div>
				<DressSelectBox type={"groom"}/>
				<SelectBestManPageboyDresses minusBestman={0} minusPageboy={0}/>
			</div>
		</div>
	)
}

export default SelectingDressesView