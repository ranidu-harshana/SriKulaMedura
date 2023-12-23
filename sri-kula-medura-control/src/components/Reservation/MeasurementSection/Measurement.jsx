import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import BSModal from "../../BSModal/BSModal";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {reservationSelector, selectByIdReservation} from "../../../store/slices/reservationSlice";
import {useParams} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ITEM_TYPES} from "../../../utils/constants";
import {
	getAllMeasurementsOfReservation,
	getMeasurementByTypeAndReservation,
	saveMeasurements
} from "../../../repository/measurementRepository";
import notify from "../../../utils/notify";

const Measurement = () => {
	const {id} = useParams()
	const [showAddMeasurementModal, setShowAddMeasurementModal] = useState(false);
	const [show, setShow] = useState(false);
	const [type, setType] = useState("");
	const [name, setName] = useState("");
	const [head, setHead] = useState("");
	const [shoulder, setShoulder] = useState("");
	const [chest, setChest] = useState("");
	const [weist, setWeist] = useState("");
	const [tlength, setLength] = useState("");
	const [ssize, setSSize] = useState("");
	const [arm, setArm] = useState("");
	const [jheight, setJHeight] = useState("");
	const [other, setOther] = useState("");
	const reservationCurr = useSelector((state) => selectByIdReservation(state, id))
	const reservationAlt = useSelector(reservationSelector)
	const reservation = reservationCurr ? reservationCurr : reservationAlt

	const [measurementData, setMeasurementData] = useState([])

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleAddMeasurementModalClose = () => setShowAddMeasurementModal(false)
	const handleAddMeasurementModalShow = () => setShowAddMeasurementModal(true)

	const bestManArr = []
	const pageBoyArr = []
	for (let i=0; i < reservation.no_of_bestmen; i++) {
		bestManArr.push(<MenuItem value={ITEM_TYPES.BESTMAN.ALL_CAP + " - " + (i+1)} key={i}>{ITEM_TYPES.BESTMAN.FIRSTCHAR_CAP} - {i + 1}</MenuItem>)
	}

	for (let i=0; i < reservation.no_of_pageboys; i++) {
		pageBoyArr.push(<MenuItem value={ITEM_TYPES.PAGEBOY.ALL_CAP + " - " + (i+1)} key={i}>{ITEM_TYPES.PAGEBOY.FIRSTCHAR_CAP} - {i + 1}</MenuItem>)
	}

	useEffect(() => {
		getAllMeasurementsOfReservation(id)
			.then(res => {
				setMeasurementData(res.data)
			})
	}, [id])

	const handleSelectBoxChange = (event) => {
		setType(event.target.value);

		getMeasurementByTypeAndReservation(event.target.value, reservation.id)
			.then(res => {
				if(res.status === 200) {
					setName(res.data.name)
					setHead(res.data.head)
					setShoulder(res.data.shoulder)
					setChest(res.data.chest)
					setWeist(res.data.weist)
					setLength(res.data.tlength)
					setSSize(res.data.ssize)
					setArm(res.data.arm)
					setJHeight(res.data.jheight)
					setOther(res.data.other)
				}
			})
			.catch(() => {
				setName("")
				setHead("")
				setShoulder("")
				setChest("")
				setWeist("")
				setLength("")
				setSSize("")
				setArm("")
				setJHeight("")
				setOther("")
			})
	};

	return (
		<>
			<div className="row">
				<div className="tab-content-container pt-3 pb-0" style={{minHeight: 0}}>
					<div className="row">
						<div className="row col-6 col-md-7">
							<NoOfGroomsPageboys />
						</div>
						<div className="col-6 col-md-5 text-end my-auto">
							<button onClick={handleAddMeasurementModalShow} className={'btn btn-sm btn-primary'}>Add Measurement</button>
						</div>
					</div>
				</div>

				<div className="tab-content-container mt-3" style={{minHeight: 0}}>
					<div className="row overflow-scroll px-2 pt-1">
						<table className="table table-sm table-hover table-responsive">
							<thead>
								<tr>
									<th scope="col">POS</th>
									<th scope="col">Head</th>
									<th scope="col">Shoulder</th>
									<th scope="col">Chest</th>
									<th scope="col">Weist</th>
									<th scope="col">T.Length</th>
									<th scope="col">S.Size</th>
									<th scope="col">ARM</th>
									<th scope="col">J.Height</th>
									<th scope="col">Other</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								{measurementData?.map( (measurement, i) =>
										<TableData measurement={measurement} handleShow={handleShow} key={i}/>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<BSModal show={show} handleClose={handleClose} modalTitle={"Edit GROOM Measurements "}>
				<div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Name</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="other"
							       value="ranidu"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Head</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off" name="head"
							       className="form-control"
							       value="+1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Shoulder</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off" name="shoulder"
							       className="form-control"
							       value="+1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Chest</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="chest"
							       value="+1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Weist</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="weist"
							       value="+1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">T.Length</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="tlength"
							       value="+1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">S.Size</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="ssize"
							       value="+1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Arm</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="arm"
							       value="1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">J.Height</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="jheight"
							       value="1"/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Other</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="other"
							       value="+1"/>
						</div>
					</div>
					<div className="form-group row mt-3 text-end">
						<p>
							<button className={'btn btn-success'}>Save</button>
						</p>
					</div>
				</div>
			</BSModal>

			<BSModal show={showAddMeasurementModal} handleClose={handleAddMeasurementModalClose} modalTitle={"Add Measurements "}>
				<div>
					<div className="mb-2">
						<FormControl fullWidth size="small">
							<InputLabel id="demo-simple-select-label">Type</InputLabel>
							<Select
								labelId="type"
								id="type"
								value={type}
								label="Type"
								onChange={handleSelectBoxChange}
							>
								<MenuItem value={ITEM_TYPES.GROOM.ALL_CAP}>{ITEM_TYPES.GROOM.FIRSTCHAR_CAP}</MenuItem>
								{bestManArr}
								{pageBoyArr}
							</Select>
						</FormControl>
					</div>

					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Name</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="name"
							       value={name}
									onChange={(e) => setName(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Head</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off" name="head"
							       className="form-control"
							       value={head}
							       onChange={(e) => setHead(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Shoulder</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off" name="shoulder"
							       className="form-control"
							       value={shoulder}
							       onChange={(e) => setShoulder(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Chest</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="chest"
							       value={chest}
							       onChange={(e) => setChest(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Weist</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="weist"
							       value={weist}
							       onChange={(e) => setWeist(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">T.Length</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="tlength"
							       value={tlength}
							       onChange={(e) => setLength(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">S.Size</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="ssize"
							       value={ssize}
							       onChange={(e) => setSSize(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Arm</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="arm"
							       value={arm}
							       onChange={(e) => setArm(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">J.Height</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="jheight"
							       value={jheight}
							       onChange={(e) => setJHeight(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mb-2">
						<label className="col-md-3 col-form-label">Other</label>
						<div className="col-md-9">
							<input type="text" autoComplete="off"
							       className="form-control" name="other"
							       value={other}
							       onChange={(e) => setOther(e.target.value)}/>
						</div>
					</div>
					<div className="form-group row mt-3 text-end">
						<p>
							<button className={'btn btn-success'} onClick={() => {
								saveMeasurements(type, name, head, shoulder, chest, weist, tlength, ssize, arm, jheight, other, reservation.id)
									.then(() => notify(1, "Measurement Saved"))
									.catch(() => notify(0, "Measurement Saving Failed"))
							}}>Save</button>
						</p>
					</div>
				</div>
			</BSModal>
		</>
	);
}

export default Measurement;

const TableData = ({measurement, handleShow}) => (
	<tr>
		<td>{measurement.type===""?"-":measurement.type}</td>
		<td>{measurement.head===""?"-":measurement.head}</td>
		<td>{measurement.shoulder===""?"-":measurement.shoulder}</td>
		<td>{measurement.chest===""?"-":measurement.chest}</td>
		<td>{measurement.weist===""?"-":measurement.weist}</td>
		<td>{measurement.tlength===""?"-":measurement.tlength}</td>
		<td>{measurement.ssize===""?"-":measurement.ssize}</td>
		<td>{measurement.arm===""?"-":measurement.arm}</td>
		<td>{measurement.jheight===""?"-":measurement.jheight}</td>
		<td>{measurement.other===""?"-":measurement.other}</td>
		<td><button className={'btn btn-sm btn-success'} onClick={handleShow}>Edit</button></td>
	</tr>
)