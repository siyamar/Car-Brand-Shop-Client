import cart1 from "../../assets/Pic/1.avif"
import cart3 from "../../assets/Pic/3.avif"
import cart4 from "../../assets/Pic/4.jpg"
import cart6 from "../../assets/Pic/7.avif"
const TopSels = () => {
  return (
    <div>
      <div className="text-center mt-12 mb-6 text-white">
        <h2 className="text-3xl font-bold">Top Sales</h2>
        <p className="text-sm">
          Efficient, sleek vehicles offering comfort, speed, and advanced safety
          technologies.
        </p>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <img
            src={cart1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
          <img
            src={cart3}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
          <img
            src={cart4}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[500px]">
          <img
            src={cart6}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSels;
