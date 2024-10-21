import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoMdNotificationsOutline, IoMdStarOutline } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    // State management for drawer and search modal
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    // Navigation links for the navbar
    const navLinks = (
        <>
            <li className="py-2 text-lg font-medium hover:text-blue-500 transition-colors duration-300">
                <details>
                    <summary className="cursor-pointer">My Apps</summary>
                    <ul className="p-2 pl-4">
                        <li className="py-1 hover:text-blue-500"><a href="#">App 1</a></li>
                        <li className="py-1 hover:text-blue-500"><a href="#">App 2</a></li>
                    </ul>
                </details>
            </li>
            <li className="py-2 text-lg font-medium hover:text-red-500 transition-colors duration-300">
                <a href="#">Home</a>
            </li>
            <li className="py-2 text-lg font-medium hover:text-green-500 transition-colors duration-300">
                <a href="#">Explore</a>
            </li>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-blue-100 via-green-100 to-red-100 shadow-lg relative">
            {/* Left Section - Logo & Drawer Toggle */}
            <div className="navbar-start flex items-center">
                {/* Button to toggle mobile drawer menu */}
                <button
                    className="btn btn-ghost lg:hidden"
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    aria-label="Toggle Drawer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {/* Logo with company name */}
                <a className="flex items-center gap-4 text-2xl font-bold text-blue-600" href="#">
                    <img src="/images/makerbleLogo.png" alt="Makerble Logo" className="h-10 w-auto" />
                    <h2 className='hidden lg:flex'>Makerble</h2>
                </a>
            </div>

            {/* Center Section - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {navLinks}
                </ul>
            </div>

            {/* Right Section - Icons, Avatar Dropdown, and Search Button */}
            <div className="navbar-end flex items-center space-x-4">
                {/* Search Button to open the search modal */}
                <button
                    className="btn btn-ghost btn-circle"
                    onClick={() => setSearchModalOpen(true)}
                >
                    <BiSearch className="h-6 w-6 text-blue-600" />
                </button>

                {/* Notifications Button */}
                <button className="btn btn-ghost btn-circle">
                    <IoMdNotificationsOutline className="h-6 w-6 text-red-500" />
                </button>

                {/* Messages Button */}
                <button className="btn btn-ghost btn-circle">
                    <MdOutlineMessage className="h-6 w-6 text-green-500" />
                </button>

                {/* User Avatar Dropdown */}
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full border border-blue-300 p-1 z-20">
                            <img
                                alt="User Avatar"
                                className="rounded-full w-full h-full object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="z-20 menu font-bold border border-blue-500 menu-compact dropdown-content mt-3 p-2 bg-gradient-to-r from-blue-100 via-green-100 to-red-100 shadow-lg rounded-lg w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge bg-blue-200"><IoMdStarOutline className="text-blue-500" /> Upgrade</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li>
                            <a className="justify-between">
                                More
                                <span className="badge bg-green-200"><FiArrowUpRight className="text-green-500" /></span>
                            </a>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>

            {/* Drawer for Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 transition-transform duration-300 transform ${drawerOpen ? "translate-x-0" : "-translate-x-full"} bg-gradient-to-r from-blue-100 via-green-100 to-red-100 shadow-xl lg:hidden`}
                style={{ width: "250px", height: "100vh" }}
            >
                <div className="flex flex-col h-full">
                    {/* Close button for the mobile drawer */}
                    <button
                        className="absolute top-4 right-4 text-blue-600 hover:bg-blue-200 p-2 rounded-full"
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close Drawer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Links for the mobile drawer */}
                    <ul className="menu p-4 mt-16 space-y-4">
                        {navLinks}
                    </ul>
                </div>
            </div>

            {/* Overlay to close the drawer when open */}
            {drawerOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
                    onClick={() => setDrawerOpen(false)}
                />
            )}

            {/* Search Modal */}
            {searchModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-gradient-to-r from-blue-100 via-green-100 to-red-100 shadow-lg">
                    <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-lg p-6 w-80 shadow-lg relative">
                        {/* Close Icon for the search modal */}
                        <button
                            className="absolute top-2 right-2 text-blue-600"
                            onClick={() => setSearchModalOpen(false)} // Close modal on click
                        >
                            <IoClose className="h-6 w-6" />
                        </button>
                        <h2 className="text-lg font-bold mb-4 text-blue-600">Search</h2>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-full py-2 px-4 mb-4 w-full"
                            placeholder="Search..."
                        />
                        <div className="mb-4">
                            <label className="block mb-1">Filter by:</label>
                            <select className="border border-gray-300 rounded-full py-2 px-4 w-full">
                                <option>All Topics</option>
                                <option>Topic 1</option>
                                <option>Topic 2</option>
                                <option>Topic 3</option>
                            </select>
                        </div>
                        <button
                            className="btn btn-primary w-full"
                            onClick={() => setSearchModalOpen(false)} // Close modal on click
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
