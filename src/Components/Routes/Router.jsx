import { Link, createBrowserRouter } from "react-router-dom";
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
import Blog from "../Pages/Blog/Blog";
import Update from "../Pages/MyJobs/Update";


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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/appliedJobs',
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
      },
      {
        path: '/updateJob/:id',
        element: <Update></Update>,
        loader: ({prams}) => fetch(`https://stack-jobs-server.vercel.app/myJobUpdate/${prams?.id}`)
      },
    ]
  },
  {
    path: '*',
    element: <div className="relative max-w-[1550px] mx-auto">
      <img className="w-full h-screen absolute" src="https://i.ibb.co/M2YJW5z/Capture.jpg" alt="" />
      <Link to={'/'} className="bg-none btn relative ml-[690px] mt-[600px]">Go to Home</Link>
    </div>
  }
]);

export default router;