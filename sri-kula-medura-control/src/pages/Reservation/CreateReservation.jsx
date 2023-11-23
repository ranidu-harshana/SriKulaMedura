import PageTopic from "../../components/PageTopic/PageTopic";
import {useDispatch, useSelector} from "react-redux";
import {addBranches, selectAllBranch} from "../../store/slices/branchSlice";
import {useEffect, useState} from "react";
import {getAllBranches} from "../../repository/branchRepository";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import {storeReservation} from "../../repository/reservationRepository";
import {saveReservation} from "../../store/slices/reservationSlice";
import 'react-toastify/dist/ReactToastify.css';
import notify from "../../utils/notify";
import {Link} from "react-router-dom";
import NotificationContainer from "../../components/ToastNotification/NotificationContainer";

const CreateReservation = () => {
	const [branchId, setBranchId] = useState('')
	const [name, setName] = useState('')
	const [nic, setNic] = useState('')
	const [address, setAddress] = useState('')
	const [mobno1, setMobno1] = useState('')
	const [mobno2, setMobno2] = useState('')
	const [function_date, setFunctionDate] = useState('')

	const branches = useSelector(selectAllBranch)
	const dispatcher = useDispatch()

	useEffect(() => {
		if (branches.length < 1) {
			getAllBranches()
				.then((response) => {
					dispatcher(addBranches(response.data))
				})
				.catch(error => {
					console.log("ERROR: " + error)
				})
		}
	}, [branches, dispatcher])

	const SuccessMessage = ({id}) => (
		<div>Notification save successfully<Link to={"/reservation/"+id} style={{color: "white"}}> View Reservation</Link></div>
	)

	return (
		<>
			<PageTopic topic={"Create Reservation"} breadcrumbs={[
				{title: 'Home', link: "/", active: false},
				{title: 'Create Reservation', active: true}
			]}/>

			<div className="col-12 col-md-6 mt-5 pb-4">
				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<InputLabel id="demo-select-small-label">Branch</InputLabel>
						<Select
							labelId="demo-select-small-label"
							id="demo-select-small"
							label="Branch"
							value={branchId}
							onChange={(e)=>setBranchId(e.target.value)}
						>
							{branches?.map(branch=><MenuItem value={branch.id} key={branch.id}>{branch.name}</MenuItem>)}
						</Select>
					</FormControl>
				</div>

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
							label="NIC"
							id="nic"
							size="small"
							value={nic}
							onChange={(e)=>setNic(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Address"
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
							label="Mobile No. 1"
							id="mobno1"
							size="small"
							value={mobno1}
							onChange={(e)=>setMobno1(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Mobile No. 2"
							id="mobno2"
							size="small"
							value={mobno2}
							onChange={(e)=>setMobno2(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="mt-4">
					<FormControl sx={{ width: "100%" }} size="small">
						<TextField
							label="Function Date"
							id="function_date"
							size="small"
							type={'date'}
							value={function_date}
							onChange={(e)=>setFunctionDate(e.target.value)}
						/>
					</FormControl>
				</div>

				<div className="text-end mt-4">
					<button type="submit" className="btn btn-primary" onClick={()=>{
						storeReservation(name, nic, address, branchId, mobno2, mobno1, function_date)
							.then(response => {
								if (response.status === 200) {
									dispatcher(saveReservation({...response.data}));
									notify(1, <SuccessMessage id={response.data.id}/>);
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

export default CreateReservation;