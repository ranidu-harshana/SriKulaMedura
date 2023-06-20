const ChatUserDetails = ({topic, value}) => {
	return (<>
		<span className={'row mb-2'}>
			<span className={'col'}>{topic}: </span>
			<span className={'col text-end small text-secondary'}>{value}</span>
		</span>
	</>);
}

export default ChatUserDetails;