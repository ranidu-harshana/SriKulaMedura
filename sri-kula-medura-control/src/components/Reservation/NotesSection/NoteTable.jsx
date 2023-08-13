import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useTranslation} from "react-i18next";

const NoteTable = (props) => {
    const {t} = useTranslation();
    return (
        <>
            <div className="tab-content-container">
                <div className="row mb-2">
                    <div className={'row'}>
                        <h5 className={'col'}>{t('allNotes')} </h5>
                    </div>
                </div>
                <div className="row reservation-section-table table-hover px-2">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{t('note')}</th>
                            <th scope="col">{t('date')}</th>
                            <th scope="col">{t('action')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>sdjfnsdfkjsndfkjdsfnskfjnsfj Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam debitis dolores hic inventore libero nemo nesciunt nihil, nisi obcaecati, omnis, perspiciatis velit voluptate! Architecto illo ipsa ipsum tempora ut!</td>
                            <td>2023-12-01</td>
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
                            <td>awdawdavfawcawd</td>
                            <td>2023-12-01</td>
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
                            <td>awdawdavfawcawd</td>
                            <td>2023-12-01</td>
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
                            <td>Larry the Bird</td>
                            <td>2023-12-01</td>
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
                            <td>Larry the Bird</td>
                            <td>2023-12-01</td>
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
                            <td>Larry the Bird</td>
                            <td>2023-12-01</td>
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
                            <td>Larry the Bird</td>
                            <td>2023-12-01</td>
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

export default NoteTable;