import React, { useRef, useEffect, useContext } from 'react';
import mainLogo from '../assets/main-logo.png';
import loginLogo from '../assets/login.png';
import logoutLogo from '../assets/logout.png';

import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';


const Navbar = () => {

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.addEventListener('click', handleClick);
    return () => {
      myRef.current.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (event) => {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('hidden');
  };

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (

    <section className='lg:w-5/6 mx-auto bg-[#FDA889]'>
      <header>


        <nav className=" bg-[#FDA889] w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to={ROUTES.HOME} className="flex items-center space-x-3 rtl:space-x-reverse">

              <img src={mainLogo} alt="" className='w-10' />
              <span className="self-center text-xl font-semibold whitespace-nowrap md:text-2xl"><span className='text-[#B95255]'>D</span><span className='text-[#34AE9F]'>ream </span> <span className='text-[#B95255]'>S</span><span className='text-[#2684C7]'>hop</span></span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3 items-center">

              <div className="navbar-end flex justify-center items-center">

                {user && <span className="text-black mr-3 hidden md:block">{user.displayName}</span>}
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar mr-3"
                >
                  <div className="">
                    {/* <img alt="User" src={user?.photoURL} /> */}
                    <img src={user?.photoURL} alt="" className='w-10 rounded-full' />
                  </div>
                </div>

                {user ? (

                  <span onClick={handleSignOut}>
                     <span className="block md:hidden">
                        {/* For Mobile Device Show Only Icons */}
                        <img src={logoutLogo} alt="" className='w-16 cursor-pointer' />
                      </span>
                      <span className="hidden md:block">
                    <button className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                      Logout
                    </button>
                    </span>
                  </span>
                ) : (

                  <Link to="/login">
                    <span>
                      <span className="block md:hidden">
                        {/* For Mobile Device Show Only Icons */}
                        <img src={loginLogo} alt="" className='w-16' />
                      </span>
                      <span className="hidden md:block">
                        <button className="text-white bg-[#CF500F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                          Login
                        </button>
                      </span>
                    </span>
                  </Link>
                )}
              </div>

              <button data-collapse-toggle="menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" ref={myRef}>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className="bg-[#FDA889] items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="menu">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#FDA889] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <Link to={ROUTES.HOME} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link to={ROUTES.PRODUCTS} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-white   md:dark:hover:bg-transparent ">Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    </section>

  )

}



export default Navbar