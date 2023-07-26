import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";
import Bill from "./BillingSection/Bill";
import Cost from "./CostsSection/Cost";
import Note from "./NotesSection/Note";

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
					<Tab label="Measurements" {...a11yProps(0)} />
					<Tab label="Dress Selection" {...a11yProps(1)} />
					<Tab label="Bill" {...a11yProps(2)} />
					<Tab label="Costs" {...a11yProps(3)} />
					<Tab label="Notes" {...a11yProps(4)} />
					<Tab label="Other" {...a11yProps(5)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				Measurements
			</TabPanel>
			<TabPanel value={value} index={1}>
				Dress Selection
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Bill />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Cost />
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