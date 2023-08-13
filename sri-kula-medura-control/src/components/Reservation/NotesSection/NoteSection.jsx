import {useTranslation} from "react-i18next";

const NoteSection = (props) => {
    const {t} = useTranslation();
    return (
        <>
            <div className="tab-content-container">
                <div className="row mb-2">
                    <div className={'row'}>
                        <h5 className={'col'}>{t('addNote')}</h5>
                        <span className={'text-secondary small'}><span className={'text-danger'}>* </span>{t('noteText')}</span>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="row mb-3">
                        <p className={'col-3'}>{t('note')} :</p>
                        <div className={'col-9'}>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3"></div>
                        <div className="col-9 text-end">
                            <button className={'btn btn-success w-50 w-md-25'}>{t('submit')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoteSection;