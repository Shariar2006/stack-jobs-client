import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import { Outlet } from "react-router-dom";



const MainLayOut = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;