import CalendarComp from "../../components/Calendar/CalendarComp";

const Home = (props) => {
	return (
		<div>
			<CalendarComp dates={[new Date("2023-07-28").toLocaleDateString(), new Date("2023-07-16").toLocaleDateString(), new Date("2023-08-02").toLocaleDateString(), new Date("2023-08-01").toLocaleDateString()]}/>
		</div>
	);
}

export default Home;