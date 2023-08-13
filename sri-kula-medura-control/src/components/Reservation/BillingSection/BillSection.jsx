import SectionDetails from "../SectionDetails";
import {useTranslation} from "react-i18next";

const BillSection = (props) => {
	const {t} = useTranslation();
	return (
		<>
			<div className="tab-content-container">
				<div className="row mb-2">
					<div className={'row'}>
						<h5 className={'col'}>{t('billing')}</h5>
						<div className={'col text-end'}>
							<button className={'btn btn-primary btn-sm'}>{t('editBill')}</button>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<SectionDetails topic={t('billAmount')}  value={'Rs. 17,874.00'} />
					<SectionDetails topic={t('additionalCharges')} value={'Rs. 17,874.00'} />
					<SectionDetails topic={t('customerDiscount')} value={'17,874.00'} />
					<SectionDetails topic={t('discount')} value={'17,874.00'} />
					<SectionDetails topic={t('totalAmount')} value={'17,874.00'} />
					<SectionDetails topic={t('advancePayment')} value={'17,874.00'} />
					<SectionDetails topic={t('interimPayment')} value={'17,874.00'} />
					<hr className={'mt-1'}/>
					<SectionDetails topic={t('balance')} value={'17,874.00'} />
				</div>
			</div>
		</>
	);
}

export default BillSection;