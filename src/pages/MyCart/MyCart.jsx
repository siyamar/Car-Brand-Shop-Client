import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar"
import { data } from "autoprefixer";
import Swal from "sweetalert2";
const MyCart = () => {
  const loadedcars = useLoaderData();
  const [cars, setCars] = useState(loadedcars)
console.log(loadedcars)

const handleDelete=(_id)=>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       
        fetch(`http://localhost:5000/myCart/${_id}`, {
          method: 'delete',

        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data)
          if(data.deletedCount>0){
            Swal.fire(
              'Deleted!',
              'Your Product has been deleted.',
              'success'
            )
            const remaining = cars.filter(car=> car._id !== _id);
            setCars(remaining);
          }
        })
      }
    })
      }

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl">
              <th>Photo</th>
              <th>Name</th>
              <th>Brand Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cars.map((car) => (
              <tr key={car._id} className="text-xl">
                <td>
                  <img className="w-28" src={car.photo} alt="" />
                </td>
                <td>{car.name}</td>
                <td>{car.brandName}</td>
                <td>{car.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="btn btn-secondary"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     
    </div>
  );
};

export default MyCart;
