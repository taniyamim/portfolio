import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import logo from '../../assets/taniya-low-resolution-logo-color-on-transparent-background.png'
import logo2 from '../../assets/taniya-logo.png'

const Header = () => {
    return (
        <div className="navbar sticky top-0 shadow-2xl bg-opacity-80 max-w-screen-xl z-10 bg-white text-black font-bold h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li><Link to="/">Home</Link> </li>
                        <li> <Link to="/projects">Projects</Link> </li>
                        <li> <Link to="/contact">Contact</Link> </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="h-16" src={logo} alt="" />
                    {/* <a className="btn btn-ghost normal-case text-xl">Taniya Portfolio</a> */}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li ><Link className='hover:bg-rose-100' to="/">Home</Link> </li>
                    <li> <Link className='hover:bg-rose-100' to="/projects">Projects</Link> </li>
                    <li> <Link className='hover:bg-rose-100' to="/contact">Contact</Link> </li>




                </ul>
            </div>
            <div className="navbar-end ">
                <a href='TaniyaResume.pdf' download className="btn bg-rose-500 text-white sm:text-xs"> Resume<FaDownload></FaDownload></a>
            </div>

        </div>
    );
};

export default Header;