import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ARAdBanner from "../../components/ARAdBanner/ARAdBanner";
import CardBanner from "../../components/CardBanner/CardBanner";

const Home = (props) => {
	return (
		<>
			<Header/>
			<ARAdBanner/>
			<CardBanner/>
			<Footer/>
		</>
	);
}

export default Home;