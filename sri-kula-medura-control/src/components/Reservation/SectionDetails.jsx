const SectionDetails = ({topic, value}) => {
	return (
		<>
			<div className={'row my-1'}>
				<div className="col-6">
					{topic}:
				</div>
				<div className="col-6 text-end">
					{value}
				</div>
			</div>
		</>
	);
}

export default SectionDetails;