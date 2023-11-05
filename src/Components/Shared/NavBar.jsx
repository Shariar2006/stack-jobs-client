// import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png"

const NavBar = () => {

    const navLink = <div className="lg:flex text-xl font-bold">
         <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFC501] text-xl font-bold rounded-lg px-1 py-2 " : "mx-2 text-[#04396F]"}
        >Home</NavLink></li>
         <li><NavLink to={'/login'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFC501] text-xl font-bold rounded-lg px-1 py-2 " : "mx-2 text-[#04396F]"}
        >Login</NavLink></li>
         <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFC501] text-xl font-bold rounded-lg px-1 py-2 " : "mx-2 text-[#04396F]"}
        >Register</NavLink></li>
         <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFC501] text-xl font-bold rounded-lg px-1 py-2 " : "mx-2 text-[#04396F]"}
        >All Jobs</NavLink></li>
         <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFC501] text-xl font-bold rounded-lg px-1 py-2 " : "mx-2 text-[#04396F]"}
        >Applied Jobs</NavLink></li>
         <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFC501] text-xl font-bold rounded-lg px-1 py-2 " : "mx-2 text-[#04396F]"}
        >Add A Jobs</NavLink></li>
         <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#FFC501] text-xl font-bold rounded-lg px-1 py-2 " : "mx-2 text-[#04396F]"}
        >My Jobs</NavLink></li>
         
    </div>

    return (
        <div className="navbar bg-base-100 shadow-lg px-5 justify-between">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <img className="w-[250px] h-[60px]" src={logo} alt="" />
        </div>
        <div className="">

        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
            
          </ul>
        </div>
        <div className="">
          <a className="btn">Button</a>
        </div>
        </div>
      </div>
    );
};

export default NavBar;