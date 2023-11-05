import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AddAJobs from "../Pages/AddAJobs/AddAJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path: '/',
            element: <Home></Home>
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
            element: <AddAJobs></AddAJobs>
        },
        {
            path: '/myJobs',
            element: <MyJobs></MyJobs>
        },
        {
            path: '/appliedJobs',
            element: <AppliedJobs></AppliedJobs>
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