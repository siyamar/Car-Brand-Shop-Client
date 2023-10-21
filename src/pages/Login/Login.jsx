import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
  const { signInUser } = useContext(AuthContext);

const handleLogin= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then((result) => {
          console.log(result.user);
          // const user={
          //     email, 
          //     lastLoggedAt : result?.user?.metadata?.lastSignInTime
          // }
          // //update last logged at in the database.
          // fetch('http://localhost:5000/user',{
          //     method: 'PATCH',
          //     headers: {
          //         'content-type' : 'application/json'
          //     },
          //     body: JSON.stringify(user)
          // })
          // .then(res=> res.json())
          // .then(data=>{
          //     console.log(data);
          // })
        })
        .then((error) => {
          console.error(error);
        });


    }
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl font-extrabold mt-10 mb-5 text-center">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-6">
        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link className="text-blue-600" to={"/register"}>
            Register
          </Link>
        </p>
        {/* <p className="text-center mt-4">Login With Google <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google</button></p> */}
        </div> 
      </div>
    </div>
  );
};

export default Login;
