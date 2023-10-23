import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';

const CarShowDetails = () => {
    const {id} = useParams();
    const car = useLoaderData()
    const {_id, name, brandName, photo, price, category, description} = car;
    console.log(id, car)

    const handleAddCart= ()=>{
        fetch('http://localhost:5000/myCart', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(car)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Added Product in My Cart Successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        })
    }

    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
          <div className="space-y-5 p-6">
            <img className="w-1/2 max-h-[70vh] mx-auto" src={photo} alt="" />
            <h3 className='text-3xl bg-opacity-20 p-6 bg-black'>{name}</h3>
            <p>{description}</p> 
            <button onClick={handleAddCart} className='btn btn-secondary'>Add to Cart</button>
         </div>
        </div>
    );
};

export default CarShowDetails;