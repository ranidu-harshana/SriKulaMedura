import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ARAdBanner from "../../components/ARAdBanner/ARAdBanner";
import CardBanner from "../../components/CardBanner/CardBanner";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";

const Home = (props) => {
	return (
		<>
			<Header/>
			<ARAdBanner/>
			<CardBanner/>
			<CustomerReviews />
			<Footer/>
		</>
	);
}

export default Home;