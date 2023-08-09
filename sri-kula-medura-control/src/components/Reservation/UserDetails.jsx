import {useTranslation} from "react-i18next";



const UserDetails = ({address, billNumber, bookedOn, branch}) => {
	const {t} = useTranslation();
	return (
		<>
			<span>{t('address')}</span> : <span className={'text-secondary'}>{address}</span> <br/>
			<span>{t('billNumber')}</span> : <span className={'text-secondary'}>{billNumber}</span> <br/>
			<span>{t('bookedOn')}</span> : <span className={'text-secondary'}>{bookedOn}</span> <br/>
			<span>{t('branch')}</span> : <span className={'text-secondary'}>{branch}</span>
		</>
	);
}

export default UserDetails;