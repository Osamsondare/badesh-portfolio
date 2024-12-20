import React from 'react';
import { Link } from 'react-router-dom';
import mailicon from '../Assets/mailicon.png';
import Linkedin from '../Assets/Linkedinicon.png';
import twittericon from '../Assets/twittericon.png';
import insta from '../Assets/insta.png';
import be from '../Assets/be.png';

function ContactMe() {
  return (
    <div className="bg-black text-white p-4 min-h-[75vh]">
      <div className="ml-10">
        <h1 className="text-white text-center text-[24px] font-poppins">
          Contact Adéfare
        </h1>
      </div>
      <div className="flex ml-[5rem] mt-[2rem]  ">
        <div className="w-[50px] h-[50px] bg-[#BA9B37] rounded-[100%] flex justify-center items-center">
          {' '}
          <Link className="">
            <img src={mailicon} alt="mail" />
          </Link>
        </div>
        <Link className="p-3"> bademositemitope1@gmail.com</Link>
      </div>
      <div className="flex ml-[5rem] mt-[2rem]  ">
        <div className="w-[50px] h-[50px] bg-[#BA9B37] rounded-[100%] flex justify-center items-center">
          {' '}
          <Link>
            <img src={Linkedin} alt="linkedin" />
          </Link>
        </div>

        <Link className="p-3">LinkedIn</Link>
      </div>
      <div className="flex ml-[5rem] mt-[2rem]  ">
        <div className="w-[50px] h-[50px] bg-[#BA9B37] rounded-[100%] flex justify-center items-center">
          {' '}
          <Link>
            <img src={twittericon} alt="twitter" />
          </Link>
        </div>

        <Link className="p-3">Twitter</Link>
      </div>
      <div className="flex ml-[5rem] mt-[2rem]  ">
        <div className="w-[50px] h-[50px] bg-[#BA9B37] rounded-[100%] flex justify-center items-center">
          {' '}
          <Link>
            <img src={be} alt="be" />
          </Link>
        </div>
        <Link className="p-3">Behance</Link>
      </div>
      <div className="flex ml-[5rem] mt-[2rem]  ">
        <div className="w-[50px] h-[50px] bg-[#BA9B37] rounded-[100%] flex justify-center items-center">
          {' '}
          <Link>
            <img src={insta} alt="twitter" />
          </Link>
        </div>
        <Link className="p-3">Instagram</Link>
      </div>
    </div>
  );
}

export default ContactMe;
