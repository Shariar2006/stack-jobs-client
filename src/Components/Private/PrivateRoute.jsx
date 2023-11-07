/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate,  useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)


    if(loading){
        return <img className="mx-auto" src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif"></img>
    }

    if(user){
return children
    }
    // state={location.pathname}
    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;