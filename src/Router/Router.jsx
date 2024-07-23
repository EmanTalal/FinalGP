import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import "../index.css";
// import Home from "../pages/Home";
// import Login from "../compment/Login";
import Home from "../compment/Home";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import FormPage from '../compment/FormPage'
import Asser from "../compment/Asser";
import Alula from '../compment/Alula'
import Alahsa from '../compment/Alahsa'
import Jeddah from "../compment/Jeddah";
import Riyad from '../compment/Riyad'
import Kaec from '../compment/Kaec'
import Makkah from "../compment/Makkah"; 
import Redsea from '../compment/Redsea'
import Profile from '../pages/Profile'
import Plant from '../pages/Plant'
import Destinations from '../compment/Destinations'
import Formm from "../compment/Formm";
import Plan from "../compment/Plan";
import Photo from "../compment/Photo";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
        path: "/Login",
        element:<Login/>,
      },
      {
        path: "/SignUp",
        element:<SignUp/>,
      },
      {
        path:'/FormPage',
        element:<FormPage/>
      },
      {
        path:'/Destinations',
        element:<Destinations/>
      },
      {
        path:'/Asser',
        element:<Asser/>
      },{
        path:'/Alula',
        element:<Alula/>
      }
      ,{
        path:'/Alahsa',
        element:<Alahsa/>
      },{
        path:'/Jeddah',
        element:<Jeddah/>
      },
      {
        path:'/Riyad',
        element:<Riyad/>
      },
      {
        path:'/Kaec',
        element:<Kaec/>
      },
      {
        path:'/Makkah',
        element:<Makkah/>
      }
      ,{
        path:'/Redsea',
        element:<Redsea/>
      },{
        path:'/Profile',
        element:<Profile/>
      },{
        path:'/Plant',
        element:<Plant/>
      },
      {
        path:'/formm',
        element:<Formm/>
      },
      {
        path:'/plan',
        element:<Plan/>
      },
      {
        path:'/image',
        element:<Photo/>
      },
      

  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );
  export default Rout;