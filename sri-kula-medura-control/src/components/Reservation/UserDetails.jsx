const UserDetails = ({address, billNumber, bookedOn, branch}) => {
	return (
		<>
			<span>Address</span> : <span className={'text-secondary'}>{address}</span> <br/>
			<span>Bill Number</span> : <span className={'text-secondary'}>{billNumber}</span> <br/>
			<span>Booked On</span> : <span className={'text-secondary'}>{bookedOn}</span> <br/>
			<span>Branch</span> : <span className={'text-secondary'}>{branch}</span>
		</>
	);
}

export default UserDetails;