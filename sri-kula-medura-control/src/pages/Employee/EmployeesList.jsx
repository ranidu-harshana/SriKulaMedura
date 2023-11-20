import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTopic from "../../components/PageTopic/PageTopic";
import Table from "../../components/Table/Table";

const EmployeesList = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/v1/user/employees');
				setEmployees(response.data);
			} catch (error) {
				console.error('Error fetching employees:', error);
			}
		};

		fetchEmployees();
	}, []);

	const columns = [
		{ field: 'id', headerName: 'Id', maxWidth: 300 },
		{ field: 'email', headerName: 'Email' },
		{ field: 'address', headerName: 'Address' },
		{ field: 'name', headerName: 'Name' },
		{ field: 'mobile_no', headerName: 'Mobile Number' },
		{ field: 'created_at', headerName: 'Created At' }
	];

	return (
		<>
			<div>
				<PageTopic topic={"Employee"} breadcrumbs={[
					{ title: 'Home', link: '/', active: false },
					{ title: 'Employees', active: true }
				]} />
				<Table columns={columns} payload={employees} />
			</div>
		</>
	);
};

export default EmployeesList;
