import {AsyncTypeahead} from "react-bootstrap-typeahead";
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import {checkItemExist, searchItem} from "../../repository/itemRepository";
import './Typeahead.bs5.css'
import './Typeahead.css'
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addSelectedDressByUser, selectedDressesByUserSelector} from "../../store/slices/dressSelectionSlice";
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
	const selectedDressesByUser = useSelector(selectedDressesByUserSelector)

	const handleSearch = (query) => {
		setIsLoading(true);
		searchItem(query, type)
			.then((res) => {
				setOptions(res.data);
				setIsLoading(false);
			});
	};

	const checkInputValidity = async (item, type) => {
		return await checkItemExist(item, type)
	}

	const handleOnInputChange = (event) => {
		checkInputValidity(event.target.value, type)
			.then(res => {
				setIsValid(res.data.response);
				setIsInValid(!res.data.response)
			})
			.catch(err => console.log(err))
	}

	const handleOnInputChangeBlur = (event) => {
		console.log(selectedDressesByUser)

		if (event.target.value === '') {
			dispatcher(addSelectedDressByUser(typeWithIndex, 0, parseInt(id), event.target.value, true))
		}
		checkInputValidity(event.target.value, type)
			.then(res => {
				setIsValid(res.data.response);
				setIsInValid(!res.data.response)

				if (!isSetValueBySuggestions) {
					if (event.target.value) {
						if (res.data.response) {
							dispatcher(addSelectedDressByUser(typeWithIndex, 0, parseInt(id), event.target.value, false))
						}
					}
				}
			})
			.catch(err => console.log(err))
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
						checkInputValidity(selected[0]?.item_code + " - " + selected[0]?.item_name, type)
							.then(res => {
								setIsValid(res.data.response);
								setIsInValid(!res.data.response)

								if (res.data.response) {
									dispatcher(addSelectedDressByUser(typeWithIndex, selected[0]?.id, parseInt(id), "", false))
								}
							})
							.catch(err => console.log(err))
						setIsSetValueBySuggestions(true)
					}}
				/>
			</Form.Group>
		</>
	);
}

export default AutoSuggestTextBox;