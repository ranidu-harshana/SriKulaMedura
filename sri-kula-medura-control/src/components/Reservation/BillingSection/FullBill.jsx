import BillSection from "./BillSection";
import AdditionalPaymentSection from "./AdditionalPaymentSection";
import InterimPaymentSection from "./InterimPaymentSection";
import AdditionalPaymentsTable from "./AdditionalPaymentsTable";
import InterimPaymentsTable from "./InterimPaymentsTable";

const FullBill = (props) => {
	return (
		<>
			<div className="row">
				<div className={'col-4'}>
					<BillSection/>
				</div>

				<div className={'col-4'}>
					<AdditionalPaymentSection />
				</div>

				<div className={'col-4'}>
					<InterimPaymentSection />
				</div>
			</div>
			<div className="row mt-3">
				<div className={'col-6'}>
					<AdditionalPaymentsTable />
				</div>

				<div className={'col-6'}>
					<InterimPaymentsTable />
				</div>
			</div>
		</>
	);
}

export default FullBill;