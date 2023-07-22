import CalendarComp from "../../components/Calendar/CalendarComp";
import PageTopic from "../../components/PageTopic/PageTopic";

const Home = (props) => {
	return (
		<div>
			<PageTopic topic={"Dashboard"} breadcrumbs={[
				{title: 'Home', active: true},
			]}/>
			<CalendarComp dates={[new Date("2023-07-28").toLocaleDateString(), new Date("2023-07-16").toLocaleDateString(), new Date("2023-08-02").toLocaleDateString(), new Date("2023-08-01").toLocaleDateString()]}/>
		</div>
	);
}

export default Home;