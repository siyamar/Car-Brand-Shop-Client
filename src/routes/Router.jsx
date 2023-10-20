import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import AddProduct from "../pages/AddProduct/AddProduct";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addProduct',
            element: <AddProduct></AddProduct>
        },
      ]
    },
  ]);

  export default router