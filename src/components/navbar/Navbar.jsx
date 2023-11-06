import {  NavLink } from "react-router-dom";
import "./navbarCss/navbar.css";


const Navbar = () => {

    //Note: Some time useLoaderData can't load data perfectly for asyncchronous behavior.when it's refresh then it's can't problem for data loading.................
    const handleHomeClick = () => {
        window.location = '/';
      };




    return (
        <>
            <nav className="flex justify-between items-center  m-auto">
                <div className="h-13 w-[264px]">
                    <img src="https://i.ibb.co/zmbFwV8/Logo.png" alt="" />
                </div>
                <div className="mr-3">
                    <ul className="flex font-semibold">
                        <li className=" mx-5 md:mr-12">
                            <NavLink to="/" onClick={handleHomeClick}>Home</NavLink>
                        </li>
                        <li className="mr-5 md:mr-12">
                            <NavLink to="/donation" >Donation</NavLink>
                        </li>
                        <li>
                          <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;