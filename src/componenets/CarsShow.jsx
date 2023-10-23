import { useLoaderData, useParams} from "react-router-dom";
import CarCards from "./CarCards";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import AdvertisingSlider from "./AdvertisingSlider";

const CarsShow = () => {
  const loadedCars = useLoaderData();
  const {id} = useParams();
  console.log(id)

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <AdvertisingSlider></AdvertisingSlider>
      <div className="text-center mx-36">
      <h2 className="text-5xl font-bold mt-8">Our Best Product</h2>
      <p className="mb-8">Preparing them used to take up to two days. Not anymore! Bring your car sales photography to the next level by delivering high-quality cutouts for classifieds</p>
      </div>
      <div className="grid md:grid-cols-1 gap-4 mb-8">
        {loadedCars.map(car => 
          car.category == id &&
          <CarCards
            key={car._id}
            car={car}
          ></CarCards>
        )}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default CarsShow;
