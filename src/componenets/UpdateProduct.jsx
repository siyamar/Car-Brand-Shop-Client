import React from "react";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const car = useLoaderData();
  const {_id, name, brandName, price, category, rating, description, photo} = car;
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
              const name = form.name.value;
              const brandName = form.brandName.value;
              const price = form.price.value;
              const category = form.category.value;
              const photo = form.photo.value;
              const rating = form.rating.value;
              const description = form.description.value;
      
              const updateProduct = {name, brandName, price, category, rating, description, photo};
              console.log(updateProduct)
      
              fetch(`http://localhost:5000/car/${_id}`,{
                method: "put",
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(updateProduct)
              })
              .then(res=> res.json())
              .then(data=>{
                console.log(data)
                Swal.fire({
                  title: 'Success!',
                  text: 'Update Product Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
        
              })
      };
      
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <div className=" md:mx-20 m-10  px-20">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Update Product: {name}
        </h2>
        <form onSubmit={handleAddProduct}>
          {/* form Car Name and Brand Name row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Car Name</span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  defaultValue={name}
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
                  defaultValue={brandName}
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Price and Category row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  name="price"
                  defaultValue={price}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  name="category"
                  defaultValue={category}
                  type="text"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo URL and Rating row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  name="photo"
                  defaultValue={photo}
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
                  defaultValue={rating}
                  type="text"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Description row */}
          <div className="mb-4">
            <div className="form-control :w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  name="description"
                  defaultValue={description}
                  type="text"
                  placeholder="Short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block bg-black text-white hover:bg-black "
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProduct;
