import NoOfGroomsPageboys from "../Common/NoOfGroomsPageboys";
import BSModal from "../../BSModal/BSModal";
import {useState} from "react";
import {useTranslation} from "react-i18next";


const Measurement = (props) => {
	const {t} = useTranslation();
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
									<th scope="col">{t('pos')}</th>
									<th scope="col">{t('head')}</th>
									<th scope="col">{t('shoulder')}</th>
									<th scope="col">{t('chest')}</th>
									<th scope="col">{t('weist')}</th>
									<th scope="col">T.Length</th>
									<th scope="col">S.Size</th>
									<th scope="col">ARM</th>
									<th scope="col">J.Height</th>
									<th scope="col">{t('other')}</th>
									<th scope="col">{t('action')}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{t('groomcap')}</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td><button className={'btn btn-sm btn-success'} onClick={handleShow}>{t('edit')}</button></td>
								</tr>

								<tr>
									<td>{t('bestmen1')}</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td><button className={'btn btn-sm btn-success'} onClick={handleShow}>{t('edit')}</button></td>
								</tr>

								<tr>
									<td>{t('pageboy1')}</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td>+1</td>
									<td><button className={'btn btn-sm btn-success'} onClick={handleShow}>{t('edit')}</button></td>
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