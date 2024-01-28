import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();

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
                        <Link to="/training-videos" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">Training Videos</Link>
                        <Link to="/paidPlansList" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm border-r border-blue-500">Plans & Pricing</Link>
                        <Link to="/contact" className="text-white font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm">Contact</Link>
                    </div>
                    <div className="flex items-center">
                        <video className="w-8 h-8" src='https://res.cloudinary.com/doqyrz0sg/image/upload/v1706298897/tickVerde_g2wk3p.png' alt="Tick Icon"></video>
                        <div className="relative ml-3">
                            <button
                                type="button"
                                onClick={handleGoProfile}
                                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="User Profile"
                                />
                            </button>
                        </div>
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