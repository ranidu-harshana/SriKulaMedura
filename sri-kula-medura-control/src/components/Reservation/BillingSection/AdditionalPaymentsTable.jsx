const AdditionalPaymentsTable = (props) => {
	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>All Additional Charges</h5>
					</div>
				</div>
				<table className="table table-striped table-sm">
					<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default AdditionalPaymentsTable;