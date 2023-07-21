import CalendarComp from "../../components/Calendar/CalendarComp";
import PageTopic from "../../components/PageTopic/PageTopic";

const Home = (props) => {
	return (
		<div>
			<PageTopic topic={"Dashboard"} breadcrumbs={[
				{title: 'Home', active: true},
			]}/>
			<CalendarComp dates={["2023-06-28", "2023-07-16", "2023-08-02", "2023-08-01"]}/>
		</div>
	);
}

export default Home;