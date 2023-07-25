import PageTopic from "../../components/PageTopic/PageTopic";
import Table from "../../components/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addItems, selectAllItem} from "../../store/slices/itemSlice";
import {getAllItems} from "../../repository/itemRepository";

const Inventory = (props) => {
	const items = useSelector(selectAllItem)
	const dispatcher = useDispatch()

	const columns = [
		{field: 'id', headerName: "Id", maxWidth: 300},
		{field: 'item_code', headerName: "Item Code"},
		{field: 'item_name', headerName: "Item Name"},
		{field: 'item_type', headerName: "Item Type"},
		{field: 'rented_status', headerName: "Status"},
		{field: 'item_category_id', headerName: "Item Category"},
		{field: 'created_at', headerName: "Created At"}
	]

	useEffect(() => {
		if(items.length < 1) {
			getAllItems()
				.then((response) => {
					dispatcher(addItems(response.data))
				})
				.catch(error => {
					console.log("ERROR: " + error)
				})
		}
	}, [dispatcher, items]);

	return (
		<>
			<div>
				<PageTopic topic={"Item"} breadcrumbs={[
					{title: 'Home', link: "/", active: false},
					{title: 'Items', active: true}
				]}/>
				<Table columns={columns} payload={items}/>
			</div>
		</>
	);
}

export default Inventory;