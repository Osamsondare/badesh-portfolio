import React from 'react';
import Vector1 from '../Assets/Vector (1).png';
import Frame12 from '../Assets/Frame 12.png';
import Test1 from '../Assets/Test1.png';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className=" text-white bg-black">
      <div>
        <div className="p-10">
          <h1 className="text-[32px] font-poppins">
            {' '}
            Hi, I am <span className="text-[#BA9B37]">Adéfare.</span>{' '}
          </h1>
          <h1 className="text-[32px] font-poppins">Welcome to my Portfolio!</h1>
          <div className="flex pt-4 ">
            <Link
              to="/Projects"
              className="font-poppins bg-[#BA9B37] py-2 px-6  h-[41px]  rounded-3xl"
            >
              View Projects
            </Link>{' '}
            <Link className="font-poppins w-[137px] h-[41px] bg-[black] border ml-[7rem] border-[#BA9B37] text-center p-2 rounded-3xl">
              {' '}
              Hire Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center p-10">
          <img src={Vector1} alt="vector" />
        </div>
      </div>
      <div className="selected-projects pl-10 pr-10 pb-10">
        <h1 className="text-center text-[32px] font-poppins pb-5">
          {' '}
          Selected Projects
        </h1>
        <p className="text-cente  font-poppins">
          {' '}
          Here are a few case studies showcasing some of the projects i have
          previously worked on
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
      <div className="testimonials pt-10">
        <div>
          <h1 className="text-center text-[32px] font-poppins">Testimonials</h1>
          <p className="pt-2 pl-10 text-center text-[19px] pr-10 w-[450px]">
            Here is what my colleagues have to say about me
          </p>
        </div>
        <div className="testimony-1 rounded-2xl p-9 ml-10 mr-[3rem] border bg-[#BA9B37]">
          <p className="text-[44px]">&#12317;</p>
          <div>
            <div className="flex p-1 ">
              <img src={Test1} alt="Georgina-pic" className="w-[60px]" />
              <div className="ml-5">
                <p>Georgina Sharon</p>
                <p>Lead UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <p>
              “Working with Adefare has been a truly exceptional experience. His
              ability to blend creativity with functionality is unmatched. They
              consistently deliver designs that not only look amazing but also
              enhance the user experience. Their attention to detail and
              user-centered approach made a significant impact on our project’s
              success.”
            </p>
          </div>
          <p className="text-[44px] text-right">&#12319;</p>
        </div>
        <div className="testimony-2 mt-4 rounded-2xl p-9 ml-10 mr-[3rem] border bg-[#BA9B37]">
          <p className="text-[44px]">&#12317;</p>
          <div>
            <div className="flex p-1 ">
              <img src={Test1} alt="Georgina-pic" className="w-[60px]" />
              <div className="ml-5">
                <p>Georgina Sharon</p>
                <p>Lead UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <p>
              “Working with Adefare has been a truly exceptional experience. His
              ability to blend creativity with functionality is unmatched. They
              consistently deliver designs that not only look amazing but also
              enhance the user experience. Their attention to detail and
              user-centered approach made a significant impact on our project’s
              success.”
            </p>
          </div>
          <p className="text-[44px] text-right">&#12319;</p>
        </div>
        <div className="testimony-3 mt-4 rounded-2xl p-9 ml-10 mr-[3rem] border bg-[#BA9B37]">
          <p className="text-[44px]">&#12317;</p>
          <div>
            <div className="flex p-1 ">
              <img src={Test1} alt="Georgina-pic" className="w-[60px]" />
              <div className="ml-5">
                <p>Georgina Sharon</p>
                <p>Lead UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div>
            {' '}
            <p>
              “Working with Adefare has been a truly exceptional experience. His
              ability to blend creativity with functionality is unmatched. They
              consistently deliver designs that not only look amazing but also
              enhance the user experience. Their attention to detail and
              user-centered approach made a significant impact on our project’s
              success.”
            </p>
          </div>
          <p className="text-[44px] text-right">&#12319;</p>
        </div>
      </div>
      <div className="let-connects mt-5 pl-10">
        <h1 className="text-center text-[32px] font-poppins">
          Let’s work together
        </h1>
        <p className="text-center w-[400px]  mt-2 ml-6">
          Let’s work together to create innovative, user-friendly designs that
          elevate your brand and provide an exceptional experience for your
          users.
        </p>
        <div className="flex justify-center items-center p-7">
          <Link className="bg-[#BA9B37] p-5 rounded-[3rem]">Let's Connect</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
