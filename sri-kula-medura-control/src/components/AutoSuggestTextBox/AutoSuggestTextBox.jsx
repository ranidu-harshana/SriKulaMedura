import {AsyncTypeahead} from "react-bootstrap-typeahead";
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import {checkItemExist, searchItem} from "../../repository/itemRepository";
import './Typeahead.bs5.css'
import './Typeahead.css'
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {addSelectedDressByUser} from "../../store/slices/dressSelectionSlice";
import {ITEM_TYPES} from "../../utils/constants";

const AutoSuggestTextBox = ({type, typeWithIndex, index}) => {
	const {t} = useTranslation()

	const {id} = useParams()
	const dispatcher = useDispatch()

	const [isLoading, setIsLoading] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [isInValid, setIsInValid] = useState(false);
	const [options, setOptions] = useState([]);
	const [isSetValueBySuggestions, setIsSetValueBySuggestions] = useState(false)

	const handleSearch = (query) => {
		setIsLoading(true);
		searchItem(query, type)
			.then((res) => {
				if (res.data.length <= 0) {
					setIsValid(false);
					setIsInValid(true)
				} else {
					setIsValid(true);
					setIsInValid(false)
				}
				setOptions(res.data);
				setIsLoading(false);
			});
	};

	const handleOnInputChange = (event) => {
		checkItemExist(event.target.value)
			.then(res => {
				setIsValid(res.data.response);
				setIsInValid(!res.data.response)
			})
			.catch(err => console.log(err))
	}

	const handleOnInputChangeBlur = (event) => {
		handleOnInputChange(event)
		if (!isSetValueBySuggestions) {
			if (event.target.value) {
				if (isInValid) {
					dispatcher(addSelectedDressByUser(typeWithIndex, 0, parseInt(id), event.target.value))
				}
			}
		}
	}

	const filterBy = () => true;

	return (
		<>
			<Form.Group>
				<AsyncTypeahead
					filterBy={filterBy}
					id={`${type}${index}${Math.random()}`}
					isValid={isValid}
					isInvalid={isInValid}
					isLoading={isLoading}
					highlightOnlyResult={true}
					minLength={0}
					labelKey={(item)=>`${item?.item_code} - ${item?.item_name}`}
					onSearch={handleSearch}
					options={options}
					placeholder={t(`select${t(ITEM_TYPES[type.toUpperCase()].FIRSTCHAR_CAP)}Dress`)}
					renderMenuItemChildren={(item) => (
						<>
							<span className={'fw-bold'}>{item?.item_code}</span> - <span>{item?.item_name}</span>
						</>
					)}
					onBlur={handleOnInputChangeBlur}
					onKeyDown={handleOnInputChange}
					onChange={(selected)=>{
						setIsSetValueBySuggestions(true)
						dispatcher(addSelectedDressByUser(typeWithIndex, selected[0]?.id, parseInt(id), ""))
					}}
				/>
			</Form.Group>
		</>
	);
}

export default AutoSuggestTextBox;