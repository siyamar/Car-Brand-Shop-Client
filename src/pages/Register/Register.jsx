import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password, };
    console.log(user);

     //reset error
     setRegisterError('')

    if(password.length<6){
      setRegisterError('Password should be at least 6 characters or longer!!');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Your Password should at least one upper case characters!');
      return;
    }
    else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
      setRegisterError('Your Password should at least one special characters!');
      return;
    }


    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: 'Success!',
          text: 'Sign Up Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
    
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message)
        // Swal.fire({
        //   title: 'Error!',
        //   text: {registerError},
        //   icon: 'error',
        //   confirmButtonText: 'X'
        // })

      });

  };
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl font-extrabold mt-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className="p-4 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-black">Register</button>
          </div>
        </form>
        
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/login"}>
            Login
          </Link>
        </p>
        {
          registerError && <p className="text-red-700 text-center mt-4">{registerError}</p>
        }
      </div>
    </div>
  );
};

export default Register;
