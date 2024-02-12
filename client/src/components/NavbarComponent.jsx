import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  ArrowRightStartOnRectangleIcon, ArrowRightCircleIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import { setLogOut } from '../redux/actions';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const user = useSelector((state)=> state?.user);
    const dispatch = useDispatch()

    console.log(user)


    const logOut = () => {
        dispatch(setLogOut())
        navigate("/loginUser")
    }   

    const handleGoProfile = () => {
        navigate('/profile');
    };

    return (
        <div className='bg-black'>
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                    <div className="flex items-center">
                        <img
                            className="h-16 w-auto"
                            src="https://static.wixstatic.com/media/39c6da_c313300b528e4aa284d37b4c31f951a8~mv2.png/v1/crop/x_83,y_128,w_336,h_226/fill/w_154,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design.png"
                            alt="Your Company"
                        />
                        <div className="text-white font-bold text-xl ml-2">AIQ Academy</div>
                    </div>
                    <div className="hidden ml-6 space-x-4 sm:flex items-center justify-center">
                        <Link to="/home" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">Home</Link>
                        <Link to="/aiqBonusPlan" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">AIQ Bonus Plan</Link>
                        <Link to="/neo-tech-ai-robot" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">NeoTech AI Robot</Link>
                        <Link to="/about" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">About</Link>
                        <Link to="/allVideos" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">Training Videos</Link>
                        <Link to="/paidPlansList" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">Plans & Pricing</Link>
                        <Link to="/contact" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">Contact</Link>
                    </div>
                    <div className="flex items-center">
                       
                    {user && user.userFound !== undefined ? (
                        <div className="relative ml-3 flex flex-row gap-4">
                            <button
                                type="button"
                                onClick={handleGoProfile}
                                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="sr-only">Open user menu</span>
                            </button>
                            <p className='text-white font-bold mt-1'>{user.userFound.UserName}</p>
                            <UserCircleIcon onClick={handleGoProfile} className='cursor-pointer h-8 w-8 text-white '/>
                            <div className='flex flex-row gap-2 '>
                        
                        <ArrowRightStartOnRectangleIcon onClick={logOut} className='cursor-pointer h-8 w-8 text-white'  />
                        <p className='text-white font-bold mt-1'>Log out</p>
                        </div>
                        </div>
                       ) : (
                        <div className='flex flex-row gap-2'>
                        
                        <ArrowRightCircleIcon onClick={() => navigate("/loginUser")} className='cursor-pointer h-8 w-8 text-white'  />
                        <p className='text-white font-bold mt-1'>Log in</p>
                        </div>
                       )
                       
                       }
                    </div>
                </div>
            </nav>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-4 pb-3 pt-2">
                    <Link to="/dashboard" className="text-white font-bold block rounded-md px-3 py-2 text-base" aria-current="page">Dashboard</Link>
                    {/* Add other mobile navigation links */}
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;