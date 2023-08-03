import './Typeahead.bs5.css'
import './Typeahead.css'
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import {useState} from "react";
import Form from 'react-bootstrap/Form';

const AutoSuggestTextBox = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [options, setOptions] = useState([]);

	const SEARCH_URI = 'https://api.github.com/search/users';
	const handleSearch = (query: string) => {
		setIsLoading(true);

		fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
			.then((resp) => resp.json())
			.then(({ items }: Response) => {
				setOptions(items);
				setIsLoading(false);
			});
	};
	const filterBy = () => true;

	return (
		<>
			<Form.Group>
				<Form.Label>Single Selection</Form.Label>
				<AsyncTypeahead
					filterBy={filterBy}
					id="async-example"
					isLoading={isLoading}
					labelKey="login"
					minLength={2}
					onSearch={handleSearch}
					options={options}
					placeholder="Search for a Github user..."
					renderMenuItemChildren={(option: Item) => (
						<>
							<img
								alt={option.login}
								src={option.avatar_url}
								style={{
									height: '24px',
									marginRight: '10px',
									width: '24px',
								}}
							/>
							<span>{option.login}</span>
						</>
					)}
				/>
			</Form.Group>
		</>
	);
}

export default AutoSuggestTextBox;