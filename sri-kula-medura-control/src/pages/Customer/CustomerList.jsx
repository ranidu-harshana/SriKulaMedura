import React, {useEffect, useState} from 'react';
import PageTopic from "../../components/PageTopic/PageTopic";
import Table from "../../components/Table/Table";
import axios from "axios";

const CustomerList = (props) => {

	const [customers, setCustomers] = useState([]); // State to hold fetched employees

	useEffect(() => {
		const fetchCustomers = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/v1/employees');
				setCustomers(response.data); // Set the retrieved data in the state
			} catch (error) {
				console.error('Error fetching employees:', error);
			}
		};

		fetchCustomers();
	}, []);

	const columns = [
		{ field: 'id', headerName: "Id", maxWidth: 300 },
		{ field: 'user_id', headerName: "User ID" },
		{ field: 'discount', headerName: "Discount" },
		{ field: 'mobile_no', headerName: "Mobile Number" },
		{ field: 'created_at', headerName: "Created At" }
	];

	return (
		<>
			<div>
				<PageTopic topic={"Customer"} breadcrumbs={[
					{ title: 'Home', link: "/", active: false },
					{ title: 'Customers', active: true }
				]}/>
				<Table columns={columns} payload={customers}/>
			</div>
		</>
	);
};

export default CustomerList;
