import React from 'react';
import { Link } from 'react-router-dom';
import Frame12 from '../Assets/Frame 12.png';

export default function Projects() {
  return (
    <div>
      <div className="projects pl-10 pr-10 pb-10">
        <h1 className="text-center text-[32px] font-poppins pb-5">Projects</h1>
        <p className="text-cente  font-poppins">
          {' '}
          Explore A few of my project cases here
        </p>
      </div>
      <div id="Projects" className="bg-[#BA9B37] rounded-t-[3rem] ">
        <div className="p-10">
          <div className="flex justify-center items-center">
            <img src={Frame12} alt="workdone" />
          </div>
          <div>
            <h1 className="text-[28px] pl-11">Neo Bank</h1>
            <p className="pl-11">
              A user-friendly and visually appealing ui/ux for an one mobile
              bank application
            </p>
          </div>
          <div className="pl-11 pt-5">
            <Link className=" border border-s-white p-3 rounded-3xl">
              view project
            </Link>{' '}
          </div>
        </div>
        <div className="p-10">
          <div className="flex justify-center items-center">
            <img src={Frame12} alt="workdone" />
          </div>
          <div>
            <h1 className="text-[28px] pl-11">Neo Bank</h1>
            <p className="pl-11">
              A user-friendly and visually appealing ui/ux for an one mobile
              bank application
            </p>
          </div>
          <div className="pl-11 pt-5">
            <Link className=" border border-s-white p-3 rounded-3xl">
              view project
            </Link>{' '}
          </div>
        </div>
        <div className="p-10">
          <div className="flex justify-center items-center">
            <img src={Frame12} alt="workdone" />
          </div>
          <div>
            <h1 className="text-[28px] pl-11">Neo Bank</h1>
            <p className="pl-11">
              A user-friendly and visually appealing ui/ux for an one mobile
              bank application
            </p>
          </div>
          <div className="pl-11 pt-5">
            <Link className=" border border-s-white p-3 rounded-3xl">
              view project
            </Link>{' '}
          </div>
        </div>

        <div className="p-10 flex justify-center items-center">
          <Link className="text-[#BA9B37] rounded-[2rem] bg-white border p-4">
            {' '}
            view more
          </Link>
        </div>
      </div>
    </div>
  );
}
