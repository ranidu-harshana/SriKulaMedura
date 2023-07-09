const RoundedImage = ({width, userAvatar, className}) => {
	return (
		<>
			<img src={userAvatar} width={`${width}%`} alt="" className={`rounded-circle ${className}`}/>
		</>
	);
}

export default RoundedImage;