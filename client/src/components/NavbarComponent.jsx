import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRightStartOnRectangleIcon, ArrowRightCircleIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';
import { setLogOut } from '../redux/actions';
import getParamsEnv from '../functions/getParamsEnv';
import { useMediaQuery } from 'react-responsive';

const { VITE_HOME, VITE_AIQ_BONUS_PLAN, VITE_NEO_TECH_AI_ROBOT, VITE_ABOUT, VITE_ALL_VIDEOS, VITE_PAID_PLAN_LIST, VITE_CONTACT } = getParamsEnv();

const NavbarComponent = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state?.user);
    const dispatch = useDispatch();
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const logOut = () => {
        dispatch(setLogOut());
        navigate("/loginUser");
    };

    const handleGoProfile = () => {
        navigate('/profile');
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className='bg-black'>
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            className="h-16 w-auto"
                            src="https://static.wixstatic.com/media/39c6da_c313300b528e4aa284d37b4c31f951a8~mv2.png/v1/crop/x_83,y_128,w_336,h_226/fill/w_154,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design.png"
                            alt="Your Company"
                        />
                        <div className="text-white font-bold text-xl ml-2">AIQ Academy</div>
                    </div>
                    {isDesktopOrLaptop ? (
                        <div className="hidden sm:flex items-center space-x-4">
                            <Link to={VITE_HOME} className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">Home</Link>
                            <Link to={VITE_AIQ_BONUS_PLAN} className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">AIQ Bonus Plan</Link>
                            <Link to={VITE_NEO_TECH_AI_ROBOT} className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">NeoTech AI Robot</Link>
                            <Link to={VITE_ABOUT} className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">About</Link>
                            <Link to={VITE_ALL_VIDEOS} className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">Training Videos</Link>
                            <Link to={VITE_PAID_PLAN_LIST} className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">Plans & Pricing</Link>
                            <Link to={VITE_CONTACT} className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">Contact</Link>
                            <div className="flex flex-col items-center">
                            {user && user.userFound !== undefined ? (
                                <div className="relative mt-4 flex flex-row items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={handleGoProfile}
                                        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                    </button>
                                    <UserCircleIcon onClick={handleGoProfile} className="cursor-pointer h-8 w-8 text-white" />
                                    <p className="text-white font-bold mt-1">{user.userFound.UserName}</p>
                                    <div className="flex flex-row gap-2">
                                        <ArrowRightStartOnRectangleIcon onClick={logOut} className="cursor-pointer h-8 w-8 text-white" />
                                        <p className="text-white font-bold mt-1">Log out</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-row gap-2">
                                    <ArrowRightCircleIcon onClick={() => navigate("/loginUser")} className="cursor-pointer h-8 w-8 text-white" />
                                    <p className="text-white font-bold mt-1">Log in</p>
                                </div>
                            )}
                        </div>
                        </div>
                        
                    ) : (
                        <div className="flex items-center">
                            <button onClick={toggleMobileMenu} className="text-white hover:text-gray-300 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                            {user && user.userFound !== undefined && (
                                <div className="flex flex-col items-center ml-4">
                                    <button onClick={handleGoProfile} className="text-white focus:outline-none">
                                        <UserIcon className="h-6 w-6" />
                                    </button>
                                    <p className="text-white font-bold">{user.userFound.UserName}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden mt-4`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to={VITE_HOME} className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to={VITE_AIQ_BONUS_PLAN} className="text-white block px-3 py-2 rounded-md text-base font-medium">AIQ Bonus Plan</Link>
                        <Link to={VITE_NEO_TECH_AI_ROBOT} className="text-white block px-3 py-2 rounded-md text-base font-medium">NeoTech AI Robot</Link>
                        <Link to={VITE_ABOUT} className="text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link to={VITE_ALL_VIDEOS} className="text-white block px-3 py-2 rounded-md text-base font-medium">Training Videos</Link>
                        <Link to={VITE_PAID_PLAN_LIST} className="text-white block px-3 py-2 rounded-md text-base font-medium">Plans & Pricing</Link>
                        <Link to={VITE_CONTACT} className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                        <div className="flex flex-col items-center">
                            {user && user.userFound !== undefined ? (
                                <div className="relative mt-4 flex flex-col items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={handleGoProfile}
                                        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                    </button>
                                    <div className="flex flex-row gap-2">
                                        <ArrowRightStartOnRectangleIcon onClick={logOut} className="cursor-pointer h-8 w-8 text-white" />
                                        <p className="text-white font-bold mt-1">Log out</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-row gap-2">
                                    <ArrowRightCircleIcon onClick={() => navigate("/loginUser")} className="cursor-pointer h-8 w-8 text-white" />
                                    <p className="text-white font-bold mt-1">Log in</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;