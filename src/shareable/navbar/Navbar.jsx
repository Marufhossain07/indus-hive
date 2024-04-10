import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Providers } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(Providers);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <> <li><NavLink to="/update">Update Profile</NavLink></li>
                <li><NavLink to="/profile">Dashboard</NavLink></li></>

        }
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className="mt-10">
            <div className="navbar p-0 max-w-[1140px] mx-auto">
                <div data-aos="fade-down" data-aos-duration="1000" className="navbar-start">
                    <div className="dropdown z-20">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul id="nav" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a  className="btn btn-ghost pl-0 text-orange-500 text-4xl">IndusHive</a>
                </div>
                <div data-aos="fade-down"  data-aos-delay="1000" className="navbar-center hidden lg:flex">
                    <ul id="nav" className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {
                    user ?

                        <div  data-aos="fade-down"  data-aos-delay="1000" className="navbar-end gap-5">
                            <div className="avatar dropdown dropdown-hover">
                                <div className="w-10  rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                    <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 font-medium rounded-box w-52">
                                        <li><a>{user.displayName}</a></li>
                                        <li><Link to='/profile'>Dashboard</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <button onClick={handleSignOut} className='btn font-inter py-2 px-8 bg-orange-500 border-none text-white'>Sign Out</button>
                        </div>
                        :
                        <div  data-aos="fade-down"  data-aos-delay="1000" className="navbar-end">
                            <Link to="/login"><button className='btn font-inter py-2 px-8 bg-orange-500 border-none text-white'>Login</button></Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;