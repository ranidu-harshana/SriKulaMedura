import BillSection from "./BillSection";
import AdditionalPaymentSection from "./AdditionalPaymentSection";
import InterimPaymentSection from "./InterimPaymentSection";
import AdditionalPaymentsTable from "./AdditionalPaymentsTable";
import InterimPaymentsTable from "./InterimPaymentsTable";

const Bill = (props) => {
	return (
		<>
			<div className="row">
				<div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
					<BillSection/>
				</div>

				<div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
					<AdditionalPaymentSection />
				</div>

				<div className={'col-12 col-md-4 p-0 px-md-2 mt-3 mt-md-0'}>
					<InterimPaymentSection />
				</div>
			</div>
			<div className="row mt-3">
				<div className={'col-12 col-md-6 p-0 px-md-2'}>
					<AdditionalPaymentsTable />
				</div>

				<div className={'col-12 col-md-6 p-0 px-md-2 mt-3 mt-md-0'}>
					<InterimPaymentsTable />
				</div>
			</div>
		</>
	);
}

export default Bill;