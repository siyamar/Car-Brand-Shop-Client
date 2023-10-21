import Navbar from "../shared/Navbar/Navbar"
import Footer from "../shared/Footer/Footer"
import Cart from "./Cart";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import TopSels from "./TopSels";
import { useLoaderData } from "react-router-dom";
const Home = () => {
    const loadedBrand = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            {/* <Cart loadedBrand={loadedBrand}></Cart> */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
            {
                loadedBrand.map(brand=><Cart key={brand._id} brand={brand}></Cart>)
            }
            </div>
            <TopSels></TopSels>
            <Footer></Footer>
        </div>
    );
};

export default Home;