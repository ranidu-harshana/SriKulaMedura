import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = () => {
	const inputTypes = [{
		required: true,
		fullWidth: true,
		name: 'password',
		label: 'Password',
		type: 'password',
		id: 'password',
		autoComplete: 'new-password'
	}, {
		required: true,
		fullWidth: true,
		name: 'username',
		label: 'Username',
		type: 'text',
		id: 'username',
		autoComplete: 'username'
	},];

	return (<>
			{inputTypes.map((inputType, index) => (<TextField {...inputType} key={index}/>))}
		</>);
};

export default TextInput;
