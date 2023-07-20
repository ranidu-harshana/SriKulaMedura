import PageTopic from "../../components/PageTopic/PageTopic";
import Table from "../../components/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";
import {addItemCats, selectAllItemCategory} from "../../store/slices/itemCategorySlice";

const ItemCategory = (props) => {
	const item_cats = useSelector(selectAllItemCategory)
	const dispatcher = useDispatch()

	const columns = [
		{field: 'id', headerName: "Id", maxWidth: 300},
		{field: 'category_name', headerName: "Item Category"},
		{field: 'created_at', headerName: "Created At"}
	]

	const getItemCats = () => {
		return axios.get(BASE_URL+'/itemcategory/').then((response) => response.data );
	}

	useEffect(() => {
		axios.get(BASE_URL+'/itemcategory/').then((response) => {
			console.log("IN: " + response.data)
			dispatcher(addItemCats(response.data))
		});
		console.log("OUT: "+ getItemCats())
	}, [dispatcher]);

	return (
		<div>
			<PageTopic topic={"Item Category"} breadcrumbs={[
				{title: 'Home', link: "/", active: false},
				{title: 'Item Category', active: true}
			]}/>
			<Table columns={columns} payload={item_cats}/>
		</div>
	);
}

export default ItemCategory;