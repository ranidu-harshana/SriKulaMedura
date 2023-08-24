import SectionDetails from "../SectionDetails";
import {useParams} from "react-router-dom";
import {convertNumberToPriceFormat} from "../../../utils/helpers";
import useBillGenerator from "../../../hooks/useBillGenerator";

const BillSection = () => {
	const {id} = useParams()
	const {
		dressPriceSum,
		additionalPaymentsSum,
		interimPaymentsSum,
		reservationDiscount,
		customerDiscount,
		advancedPayment,
		totalAmount,
		balanceToPay
	} = useBillGenerator(id)

	return (<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>Billing</h5>
						<div className={'col text-end'}>
							<button className={'btn btn-primary btn-sm'}>Edit Bill</button>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<SectionDetails topic={'Bill Amount'} value={"Rs. " + convertNumberToPriceFormat(dressPriceSum)}/>
					<SectionDetails topic={'Additional Charges'}
					                value={convertNumberToPriceFormat(additionalPaymentsSum)}/>
					<SectionDetails topic={'Customer Discount'} value={convertNumberToPriceFormat(customerDiscount)}/>
					<SectionDetails topic={'Discount'} value={convertNumberToPriceFormat(reservationDiscount)}/>
					<SectionDetails topic={'Total Amount'} value={convertNumberToPriceFormat(totalAmount)}/>
					<SectionDetails topic={'Advance Payment'} value={convertNumberToPriceFormat(advancedPayment)}/>
					<SectionDetails topic={'Interim Payment'} value={convertNumberToPriceFormat(interimPaymentsSum)}/>
					<hr className={'mt-1'}/>
					<SectionDetails topic={'Balance To Pay'} value={"Rs " + convertNumberToPriceFormat(balanceToPay)}/>
				</div>
			</div>
		</>);
}

export default BillSection;