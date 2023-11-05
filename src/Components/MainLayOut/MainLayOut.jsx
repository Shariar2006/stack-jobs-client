import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import { Outlet } from "react-router-dom";



const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;