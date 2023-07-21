import CalendarComp from "../../components/Calendar/CalendarComp";

const Home = (props) => {
	return (
		<div>
			<CalendarComp dates={["2023-06-28", "2023-07-16", "2023-08-02", "2023-08-01"]}/>
		</div>
	);
}

export default Home;