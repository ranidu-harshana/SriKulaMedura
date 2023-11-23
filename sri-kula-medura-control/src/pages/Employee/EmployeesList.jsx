import PageTopic from "../../components/PageTopic/PageTopic";
import Table from "../../components/Table/Table";
import {useEffect} from "react";
import {getAllItems} from "../../repository/itemRepository";
import {addItems, selectAllItem} from "../../store/slices/itemSlice";
import {useDispatch, useSelector} from "react-redux";

const EmployeesList = (props) => {
	const employees = useSelector(selectAllItem)
	const dispatcher = useDispatch()

	const columns = [
		{field: 'id', headerName: "Id", maxWidth: 300},
		{field: 'item_code', headerName: "Item Code"},
		{field: 'item_name', headerName: "Item Name"},
		{field: 'item_type', headerName: "Item Type"},
		{field: 'item_price', headerName: "Item Price"},
		{field: 'rented_status', headerName: "Status"},
		{field: 'item_category_id', headerName: "Item Category"},
		{field: 'created_at', headerName: "Created At"}
	]

	useEffect(() => {
		getAllItems()
			.then((response) => {
				dispatcher(addItems(response.data))
			})
			.catch(error => {
				console.log("ERROR: " + error)
			})
	}, [dispatcher, employees]);
	return (
		<>
			<div>
				<PageTopic topic={"Employee"} breadcrumbs={[
					{title: 'Home', link: "/", active: false},
					{title: 'Employees', active: true}
				]}/>
				<Table columns={columns} payload={employees}/>
			</div>
		</>
	);
}

export default EmployeesList;