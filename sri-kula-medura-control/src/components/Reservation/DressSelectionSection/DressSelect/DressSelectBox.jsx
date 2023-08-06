import FormControl from "@mui/material/FormControl";
import AutoSuggestTextBox from "../../../AutoSuggestTextBox/AutoSuggestTextBox";
import {useTranslation} from "react-i18next";

const DressSelectBox = ({type, dressSelectionsRef, index}) => {
	const {t} = useTranslation()

	return (
		<div className="row">
			<div className="row mb-2">
				<p className={'col-3 d-none d-md-block'}>{t(type)}{index>=0?` - ${index}`:null}</p>
				<div className={'col-12 col-md-9'}>
					<FormControl sx={{ width: "100%" }} size="small">
						<AutoSuggestTextBox textBoxRef={(el) => {
							dressSelectionsRef.current[`${type}${index>=0?index:""}`] = el
						}} key={index-1} type={type} index={index}/>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

export default DressSelectBox;