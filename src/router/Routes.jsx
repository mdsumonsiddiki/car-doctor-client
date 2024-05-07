import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import CheckOut from "../pages/CheckOut";
import AddService from "../pages/AddService";
import LogIn from "../pages/LogIn";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          index:true,
          element: <Home/>
        },
        {
          path: '/login',
          element: <LogIn/>
        },
        {
          path: '/servicedetails',
          element: <ServiceDetails/>
        },
        {
          path: '/checkout',
          element: <CheckOut/>
        },
        {
          path: '/addservice',
          element: <AddService/>
        },
      ]
    },
  ]);

export default router;