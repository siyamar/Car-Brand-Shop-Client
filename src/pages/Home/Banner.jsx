import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/modern-automobile-production-line-automated-production-equipment-shop-assembly-new-modern-cars-way-assembly-car-assembly-line-plant_645730-596.jpg?size=626&ext=jpg&ga=GA1.1.1759640776.1696900181&semt=sph)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-lg">
          <h1
            className="mb-5 text-5xl font-bold"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Automotive
          </h1>
          <p
            className="mb-5"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            The automotive industry continues to evolve at a rapid pace, with advancements in electric and autonomous vehicles reshaping the way we drive. Electric cars are becoming more accessible, offering eco-friendly options that reduce our carbon footprint.
          </p>
          <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600 mr-2">Details</button>
          <Link to={'/login'}>
          <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
