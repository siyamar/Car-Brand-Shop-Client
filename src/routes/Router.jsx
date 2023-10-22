import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CarsShow from "../componenets/CarsShow";
import AddBrand from "../pages/AddBrand/AddBrand";
import CarShowDetails from "../componenets/CarShowDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/carBrand')
        },
        {
            path: '/addProduct',
            element: <AddProduct></AddProduct>
        },
        {
            path: '/addBrand',
            element: <AddBrand></AddBrand>
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
            loader: ()=> fetch('http://localhost:5000/car')
        },
        {
            path: '/showDetails/:id',
            element: <CarShowDetails></CarShowDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/${params.id}`)
        },
      ]
    }
  ]);

  export default router