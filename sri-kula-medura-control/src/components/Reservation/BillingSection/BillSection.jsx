import BillingDetails from "./BillingDetails";

const BillSection = (props) => {
	return (
		<>
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
					<BillingDetails topic={'Bill Amount'} value={'Rs. 17,874.00'} />
					<BillingDetails topic={'Additional Charges'} value={'Rs. 17,874.00'} />
					<BillingDetails topic={'Customer Discount'} value={'17,874.00'} />
					<BillingDetails topic={'Discount'} value={'17,874.00'} />
					<BillingDetails topic={'Total Amount'} value={'17,874.00'} />
					<BillingDetails topic={'Advance Payment'} value={'17,874.00'} />
					<BillingDetails topic={'Interim Payment'} value={'17,874.00'} />
					<hr className={'mt-1'}/>
					<BillingDetails topic={'Balance'} value={'17,874.00'} />
				</div>
			</div>
		</>
	);
}

export default BillSection;