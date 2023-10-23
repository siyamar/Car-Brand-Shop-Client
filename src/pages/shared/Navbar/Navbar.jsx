import { Link, NavLink } from 'react-router-dom';
import userDeafultPic from "../../../assets/user.png"
import logo from "../../../assets/icon+.png"
// import { AuthContext } from '../../../providers/AuthProviders';
// import { useContext } from 'react';

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);

  // const handleSignOut = () => {
  //   logOut()
  //    .then()
  //    .catch();
  // };

    const navLinks =(
        <>
        <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
        <li>
        <NavLink to={"/myCart"}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/addBrand"}>Add Brand</NavLink>
      </li>
      {/* <li>
        {
          user&& <NavLink to={"/enrolled"}>My Cart</NavLink> 
        }
      </li> */}
      <li>
        <NavLink to={"/login"}>login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
        </>
    )
    return (
        <div className="navbar bg-slate-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div className='flex justify-center items-center'>
    <img className='rounded-full w-16' src={logo} alt="" />
    <h2 className="normal-case text-2xl font-bold ml-1">Car<span className='text-pink-700'>Shop</span> </h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userDeafultPic} />
          </div>
        </label>
        {/* {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )} */}
      </div>
</div>
    );
};

export default Navbar;