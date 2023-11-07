import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AddAJobs from "../Pages/AddAJobs/AddAJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import SingleCategory from "../Pages/Home/SingleCategory";
import Details from "../Pages/Details/Details";
import PrivateRoute from "../Private/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/job/:category',
        element: <SingleCategory></SingleCategory>
      },
      {
        path: '/job/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>
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
        path: '/allJobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: '/addJobs',
        element: <PrivateRoute><AddAJobs></AddAJobs></PrivateRoute>
      },
      {
        path: '/myJobs',
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path: '/appliedJobs',
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
      },
    ]
  },
  {
    path: '*',
    element: <div>
      <img className="w-full h-screen" src="https://i.ibb.co/7GCPj2n/20395260-1.jpg" alt="" />
    </div>
  }
]);

export default router;