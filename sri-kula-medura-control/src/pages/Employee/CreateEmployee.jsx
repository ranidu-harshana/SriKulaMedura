import PageTopic from "../../components/PageTopic/PageTopic";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {storeItem} from "../../repository/itemRepository";
import {saveItem} from "../../store/slices/itemSlice";
import notify from "../../utils/notify";
import NotificationContainer from "../../components/ToastNotification/NotificationContainer";
import {useDispatch, useSelector} from "react-redux";
import {addItemCats, selectAllItemCategory} from "../../store/slices/itemCategorySlice";
import {useEffect, useState} from "react";
import {getAllItemCategories} from "../../repository/itemCategoryRepository";

const CreateEmployee = () => {

	const item_cats = useSelector(selectAllItemCategory)
	const dispatcher = useDispatch()

	const [item_category_id, setItemCatId] = useState('')
	const [item_code, setItemCode] = useState('')
	const [item_name, setItemName] = useState('')
	const [item_type, setItemType] = useState('')
	const [item_image_url, setItemImageUrl] = useState('')
	const [item_price, setItemPrice] = useState('')

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
		<>
			<PageTopic topic={"Item"} breadcrumbs={[
				{title: 'Home', link: "/", active: false},
				{title: 'Create Employee', active: true}
			]}/>
			<div className="col-12 col-md-6 mt-5 pb-4">
				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Item Code"
							id="itemcode"
							size="small"
							value={item_code}
							onChange={(e)=>setItemCode(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Item Name"
							id="itemname"
							size="small"
							value={item_name}
							onChange={(e)=>setItemName(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Item Type"
							id="itemtype"
							size="small"
							value={item_type}
							onChange={(e)=>setItemType(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Item Price"
							id="itemprice"
							size="small"
							value={item_price}
							onChange={(e)=>setItemPrice(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<InputLabel id="demo-select-small-label">Item Category</InputLabel>
						<Select
							labelId="demo-select-small-label"
							id="demo-select-small"
							label="Item Category"
							value={item_category_id}
							onChange={(e)=>setItemCatId(e.target.value)}
						>
							{item_cats?.map(item_cat=><MenuItem value={item_cat.id} key={item_cat.id}>{item_cat.category_name}</MenuItem>)}
						</Select>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Item Image"
							id="itemimage"
							size="small"
							value={item_image_url}
							onChange={(e)=>setItemImageUrl(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="text-end mt-4">
					<button type="submit" className="btn btn-primary" onClick={()=>{
						storeItem(item_code, item_name, item_type, item_image_url, item_price, item_category_id)
							.then(response => {
								if (response.status === 200) {
									dispatcher(saveItem({...response.data}));
									notify(1, "Item Created Successfully.");
								} else {
									notify(0, "Reservation not saved")
								}
							})
							.catch(error => console.log(error))
					}}>Submit</button>
				</div>
			</div>
			<NotificationContainer />
		</>
	);
}

export default CreateEmployee;