import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import SingUp from "../pages/SingUp";



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
          path: '/singup',
          element: <SingUp/>
        }
      ]
    },
  ]);

export default router;