import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";
import Bill from "./BillingSection/Bill";
import Cost from "./CostsSection/Cost";
import Note from "./NotesSection/Note";
import DressSelection from "./DressSelectionSection/DressSelection";
import Measurement from "./MeasurementSection/Measurement";
import {useTranslation} from "react-i18next";

const TabPanel = ({ children, value, index, ...other }) => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const ReservationTabs = (props) => {
	const {t} = useTranslation();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value}
				      onChange={handleChange}
				      variant="scrollable"
				      scrollButtons="auto"
				      aria-label="scrollable auto tabs example">
					<Tab label= {t('measurements')} {...a11yProps(0)} />
					<Tab label={t('dressSelection(Jacket)')} {...a11yProps(1)} />
					<Tab label={t('bill')} {...a11yProps(2)} />
					<Tab label={t('costs')} {...a11yProps(3)} />
					<Tab label={t('notes')} {...a11yProps(4)} />
					<Tab label={t('other')} {...a11yProps(5)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Measurement/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<DressSelection/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Bill/>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Cost/>
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Note/>
			</TabPanel>
			<TabPanel value={value} index={5}>
				Other
			</TabPanel>
		</>
	);
}

export default ReservationTabs;