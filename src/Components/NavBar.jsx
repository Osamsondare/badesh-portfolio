import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black">
      <div className="flex justify-between rounded-[3rem] bg-[#BA9B37] items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full font-zeyada text-3xl  text-white">
          <Link to="/">Adéfare</Link>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4 md:w-[110px]">
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li className="p-4">
            <Link to="/Projects">Projects</Link>{' '}
          </li>
          <li className="p-4">
            <Link to="/contactme">Contact</Link>
          </li>
          <li className="p-4">
            {' '}
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed  top-0 w-[90%] ml-[-20px] h-auto rounded-md  bg-[#BA9B37] ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <h1 className="w-full text-3xl font-zeyada  text-white m-4">
            Adéfare
          </h1>
          <li className="p-4 text-center ">
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li className="p-4 text-center ">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="p-4 text-center">
            <Link to="/contactme">Contact</Link>
          </li>
          <li className="p-4 text-center">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
