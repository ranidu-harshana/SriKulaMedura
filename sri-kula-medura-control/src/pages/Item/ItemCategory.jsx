import PageTopic from "../../components/PageTopic/PageTopic";
import Table from "../../components/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addItemCats, selectAllItemCategory} from "../../store/slices/itemCategorySlice";
import {getAllItemCategories} from "../../repository/itemCategoryRepository";

const ItemCategory = (props) => {
	const item_cats = useSelector(selectAllItemCategory)
	const dispatcher = useDispatch()

	const columns = [
		{field: 'id', headerName: "Id", maxWidth: 300},
		{field: 'category_name', headerName: "Item Category"},
		{field: 'created_at', headerName: "Created At"}
	]

	useEffect(() => {
		if(item_cats < 1) {
			getAllItemCategories()
				.then((response) => {
					dispatcher(addItemCats(response.data))
				})
				.catch(error => {
					console.log("ERROR: " + error)
				})
		}
	}, [dispatcher, item_cats]);

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