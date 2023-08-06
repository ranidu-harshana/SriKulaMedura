import {AsyncTypeahead} from "react-bootstrap-typeahead";
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import {firtsLetterTOUppercase} from "../../utils/helpers";
import {checkItemExist, searchItem} from "../../repository/itemRepository";
import './Typeahead.bs5.css'
import './Typeahead.css'

const AutoSuggestTextBox = ({textBoxRef, type, index}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [isInValid, setIsInValid] = useState(false);
	const [options, setOptions] = useState([]);

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

	const filterBy = () => true;

	return (
		<>
			<Form.Group>
				<AsyncTypeahead
					ref={textBoxRef}
					filterBy={filterBy}
					id={`${type}${index}`}
					isValid={isValid}
					isInvalid={isInValid}
					isLoading={isLoading}
					highlightOnlyResult={true}
					minLength={0}
					labelKey={(item)=>`${item.item_code} - ${item.item_name}`}
					onSearch={handleSearch}
					options={options}
					placeholder={`Select ${firtsLetterTOUppercase(type)} Dress`}
					renderMenuItemChildren={(item) => (
						<>
							<span className={'fw-bold'}>{item.item_code}</span> - <span>{item.item_name}</span>
						</>
					)}
					onBlur={handleOnInputChange}
					onKeyDown={handleOnInputChange}
				/>
			</Form.Group>
		</>
	);
}

export default AutoSuggestTextBox;