import FormControl from "@mui/material/FormControl";
import AutoSuggestTextBox from "../../../AutoSuggestTextBox/AutoSuggestTextBox";
import {useTranslation} from "react-i18next";
import {ITEM_TYPES} from "../../../../utils/constants";

const DressSelectBox = ({type, index}) => {
	const {t} = useTranslation()

	return (
		<div className="row">
			<div className="row mb-2">
				<p className={'col-3 d-none d-md-block'}>{t(ITEM_TYPES[type.toUpperCase()].ALL_SIM)}{index>=0?` - ${index}`:null}</p>
				<div className={'col-12 col-md-9'}>
					<FormControl sx={{ width: "100%" }} size="small">
						<AutoSuggestTextBox key={index-1} type={ITEM_TYPES[type.toUpperCase()].ALL_CAP} typeWithIndex={type.concat(index>=0?index:"")} index={index}/>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

export default DressSelectBox;