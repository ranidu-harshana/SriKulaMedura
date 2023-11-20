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
import {useDispatch} from "react-redux";
import {addItemCats} from "../../store/slices/itemCategorySlice";
import {useEffect, useState} from "react";
import {getAllItemCategories} from "../../repository/itemCategoryRepository";
import {storeUser} from "../../repository/userRepository";
const CreateCustomer = () => {


	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	const [mobile_no, setMobileNo] = useState('')
	const [role, setRole] = useState('')

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
							label="Name"
							id="name"
							size="small"
							value={name}
							onChange={(e)=>setName(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Email"
							id="email"
							size="small"
							value={email}
							onChange={(e)=>setEmail(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="address"
							id="address"
							size="small"
							value={address}
							onChange={(e)=>setAddress(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="mobileno"
							id="mobileno"
							size="small"
							value={mobile_no}
							onChange={(e)=>setMobileNo(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<InputLabel id="demo-select-small-label">Role</InputLabel>
						<Select
							labelId="demo-select-small-label"
							id="demo-select-small"
							label="Role"
							value={role}
							onChange={(e)=>setRole(e.target.value)}
						>
							<MenuItem value={"STANDARD_USER"}>Standard User</MenuItem>
						</Select>
					</FormControl>
				</div>

				<div className="text-end mt-4">
					<button type="submit" className="btn btn-primary" onClick={()=>{
						storeUser(name, email, address, mobile_no, role)
							.then(response => {
								if (response.status === 200) {
									notify(1, "Customer Created Successfully.");
								} else {
									notify(0, "Customer not saved")
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

export default CreateCustomer;