import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import ResDetailsInModal from "../ResDetailsInModal";
import BSModal from "../../BSModal/BSModal";
import {useState} from "react";

const Measurement = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="row">
				<div className="tab-content-container pt-3 pb-0" style={{minHeight: 0}}>
					<div className="row col-12 col-md-8">
						<NoOfGroomsPageboys />
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
								<tr>
									<td>GROOM</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td><button className={'btn btn-sm btn-success'} onClick={handleShow}>Edit</button></td>
								</tr>

								<tr>
									<td>BESTMAN - 1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td><button className={'btn btn-sm btn-success'} onClick={handleShow}>Edit</button></td>
								</tr>

								<tr>
									<td>PAGEBOY - 1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td><button className={'btn btn-sm btn-success'} onClick={handleShow}>Edit</button></td>
								</tr>
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
					<div className="form-group row mb-2 mb-2">
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
		</>
	);
}

export default Measurement;