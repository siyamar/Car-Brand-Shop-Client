import cart1 from "../../assets/Pic/1.avif"
import cart2 from "../../assets/Pic/2.jpg"
import cart3 from "../../assets/Pic/3.avif"
import cart4 from "../../assets/Pic/4.jpg"
import cart5 from "../../assets/Pic/8.avif"
import cart6 from "../../assets/Pic/7.avif"
const Cart = () => {
  return (
    <div>
    <div className="grid md:grid-cols-3 gap-6">
        {/* cart 1 */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[250px]"
            src={cart1}
            alt="Toyota"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">Toyota</h2>
        </div>
      </div>
        {/* cart 2 */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
           className="h-[250px]"
            src={cart2}
            alt="Ford"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ford</h2>
        </div>
      </div>
        {/* cart 3 */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
           className="h-[250px]"
            src={cart3}
            alt="BMW"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">BMW</h2>
        </div>
      </div>
        {/* cart 4 */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
           className="h-[250px]"
            src={cart4}
            alt="Mercedes-Benz"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Mercedes-Benz</h2>
        </div>
      </div>
        {/* cart 5 */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
           className="h-[250px] w-full"
            src={cart5}
            alt="Tesla"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Tesla</h2>
        </div>
      </div>
        {/* cart 6 */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
           className="h-[250px]"
            src={cart6}
            alt="Honda"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Honda</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
