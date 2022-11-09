import React from "react";
import Logo from "./Logo";
const Nav = () => {
    return (
        <nav className="flex justify-between items-center">
            <Logo />
            <p className="text-white  text-lg h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-5 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 select-none shadow-xl">Sign out</p>
        </nav>
    );
}

export default Nav;