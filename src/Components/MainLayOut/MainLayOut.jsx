import NavBar from "../Shared/NavBar";
import { Outlet } from "react-router-dom";



const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;