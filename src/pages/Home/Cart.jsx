// import cart1 from "../../assets/Pic/1.avif"
// import cart2 from "../../assets/Pic/2.jpg"
// import cart3 from "../../assets/Pic/3.avif"
// import cart4 from "../../assets/Pic/4.jpg"
// import cart5 from "../../assets/Pic/8.avif"
// import cart6 from "../../assets/Pic/7.avif"
import { Link } from "react-router-dom"
import CarsShow from "../../componenets/CarsShow";
const Cart = ({brand}) => {
 const{brandName, photo, category} = brand;

  return (
    <div >
        <Link to={`/carsShow/${category}`}>
        <div
        className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[250px]"
            src={photo}
            alt="Toyota"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{brandName}</h2>
        </div>
      </div>
        </Link>
    </div>
  );
};

export default Cart;
