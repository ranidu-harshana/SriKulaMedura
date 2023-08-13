import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {ButtonGroup} from "@mui/material";
import {useTranslation} from "react-i18next";

const OtherCostsTable = (props) => {
	const {t} = useTranslation();
	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>{t('allOtherCosts')}</h5>
					</div>
				</div>
				<div className="row reservation-section-table px-2">
					<table className="table table-striped table-sm table-hover">
					<thead>
						<tr>
							<th scope="col">{t('amount')}</th>
							<th scope="col">{t('reason')}</th>
							<th scope="col">{t('date')}</th>
							<th scope="col">{t('action')}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>2023-07-14</td>
							<td>
								<ButtonGroup size="small">
									<IconButton color="success" size="small">
										<EditIcon />
									</IconButton>
									<IconButton sx={{color:"red"}} size="small">
										<DeleteIcon />
									</IconButton>
								</ButtonGroup>
							</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cum distinctio eum eveniet facilis illum, iste, necessitatibus quo rem similique totam unde! A consequatur dolore harum laudantium omnis voluptatem.</td>
							<td>2023-07-14</td>
							<td>
								<ButtonGroup size="small">
									<IconButton color="success" size="small">
										<EditIcon />
									</IconButton>
									<IconButton sx={{color:"red"}} size="small">
										<DeleteIcon />
									</IconButton>
								</ButtonGroup>
							</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>@twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad enim eum perspiciatis! Assumenda aut ducimus ea impedit molestias nemo, quis reiciendis soluta? Cum dignissimos eligendi esse ex labore laborum ratione.</td>
							<td>2023-12-12</td>
							<td>
								<ButtonGroup size="small">
									<IconButton color="success" size="small">
										<EditIcon />
									</IconButton>
									<IconButton sx={{color:"red"}} size="small">
										<DeleteIcon />
									</IconButton>
								</ButtonGroup>
							</td>
						</tr>
					</tbody>
				</table>
				</div>
			</div>
		</>
	);
}

export default OtherCostsTable;