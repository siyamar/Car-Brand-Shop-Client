import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CarsShow from "../componenets/CarsShow";
import AddBrand from "../pages/AddBrand/AddBrand";
import CarShowDetails from "../componenets/CarShowDetails";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../componenets/UpdateProduct";
import Error from "../pages/Error/Error";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://ass-10-brand-shop-server-6fog8l0wi-abdurs-projects.vercel.app/carBrand')
        },
        {
            path: '/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
        },
        {
            path: '/updateProduct/:id',
            element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            loader: ({params})=> fetch(`https://ass-10-brand-shop-server-6fog8l0wi-abdurs-projects.vercel.app/car/${params.id}`)
        },
        {
            
            path: '/addBrand',
            element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>
        },
        {
            path: '/myCart',
            element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: ()=> fetch('https://ass-10-brand-shop-server-6fog8l0wi-abdurs-projects.vercel.app/myCart')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/carsShow/:id',
            element: <CarsShow></CarsShow>,
            loader: ()=> fetch('https://ass-10-brand-shop-server-6fog8l0wi-abdurs-projects.vercel.app/car')
        },
        {
            path: '/showDetails/:id',
            element: <PrivateRoute><CarShowDetails></CarShowDetails></PrivateRoute>,
            loader: ({params})=> fetch(`https://ass-10-brand-shop-server-6fog8l0wi-abdurs-projects.vercel.app/car/${params.id}`)
        },
      ]
    }
  ]);

  export default router