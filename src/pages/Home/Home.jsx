import Navbar from "../shared/Navbar/Navbar"
import Footer from "../shared/Footer/Footer"
import Cart from "./Cart";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import TopSels from "./TopSels";
const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <Cart></Cart>
            <TopSels></TopSels>
            <Footer></Footer>
        </div>
    );
};

export default Home;