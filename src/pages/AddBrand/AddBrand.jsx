import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Swal from "sweetalert2";


const handleAddBrand = (event) => {
  event.preventDefault();
  const form = event.target;
        const brandName = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
    
        const newBrand = {brandName, category, photo};
        console.log(newBrand)

        fetch('http://localhost:5000/carBrand',{
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newBrand)
        })
        .then(res=> res.json())
        .then(data=>{
          console.log(data)
          Swal.fire({
            title: 'Success!',
            text: 'Added Brand Successfully',
            icon: 'success',
            confirmButtonText: 'Close'
          })
  
        })
};

const AddBrand = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      <div className=" md:mx-20 m-10  px-20">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Add Brand
        </h2>
        <form onSubmit={handleAddBrand}>
          {/* form name and quantity row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Brand Name"
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
                  type="text"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo url row */}
          <div className="mb-4">
            <div className="form-control :w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  name="photo"
                  type="text"
                  placeholder="Short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Brand"
            className="btn btn-block bg-black text-white hover:bg-black "
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddBrand;
