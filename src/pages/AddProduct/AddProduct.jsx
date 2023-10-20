import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const handleAddProduct = (event) => {
  event.preventDefault();
  const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = {name, brandName, price, type, rating, description, photo};
        console.log(newProduct)
};

const AddProduct = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      <div className=" md:mx-20 m-10  px-20">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Add Product
        </h2>
        <form onSubmit={handleAddProduct}>
          {/* form name and quantity row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Car Name</span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Car Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  name="brandName"
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier and taste row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  name="type"
                  type="text"
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo url row */}
          <div className="mb-4">
            <div className="form-control :w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  name="description"
                  type="text"
                  placeholder="Short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block bg-black text-white hover:bg-black "
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
