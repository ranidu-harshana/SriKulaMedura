import PageTopic from "../../components/PageTopic/PageTopic";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {getAllWeddingReservations} from "../../repository/reportRepository";
import PDFReport from "../../components/PDF/PDFReport";

const WeddingReservationReport = () => {
	const {t} = useTranslation()

	const [fromDate, setFromDate] = useState("")
	const [toDate, setToDate] = useState("")

	const [reservations, setReservations] = useState([])

	const [showPDF, setShowPDF] = useState(false)

	console.log(reservations)

	if (!showPDF)
		return (
			<>
				<PageTopic topic={t('weddingReservationReport')}
				           breadcrumbs={[{title: t("home"), link: "/", active: false}, {title: t("weddingReservationReport"), active: true}]}/>

				<div className="row col-6 p-4">
					<input type={'date'} className={'form-control mb-3'} value={fromDate} onChange={e => setFromDate(e.target.value)}/><br/>
					<input type={'date'} className={'form-control mb-3'} value={toDate} onChange={e => setToDate(e.target.value)}/>
					<button className={'btn btn-primary'} onClick={()=>{
						getAllWeddingReservations(fromDate, toDate)
							.then(res => {
								setReservations(res.data)
								setShowPDF(true)
							})
							.catch(err => console.log(err))
					}}>Submit</button>
				</div>
			</>
		);

	return (
		<PDFReport/>
	)
}

export default WeddingReservationReport;