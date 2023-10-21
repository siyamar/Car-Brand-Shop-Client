import { useLoaderData, useParams} from "react-router-dom";
import CarCards from "./CarCards";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const CarsShow = () => {
  const loadedCars = useLoaderData();
  const {id} = useParams();
  console.log(id)

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Navbar></Navbar>
      <div className="grid md:grid-cols-3 gap-4">
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
