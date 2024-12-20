import React from 'react';
import brain from '../Assets/Group.png';
import define from '../Assets/Group (1).png';
import ideate from '../Assets/ideate.png';
import prototype from '../Assets/Group 120.png';
import testinig from '../Assets/Group (3).png';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className="pl-9 pr-9 font-poppins bg-black text-white">
      <div className="pt-3">
        <h1 className="p-4 text-2xl text-center">About me</h1>
        <h3 className="p-4">
          Take the time to get to know me and discover why I’m the right choice
          for your team
        </h3>
        <p className="p-4">
          Hi there! I am Temitope Adefare Bademosi, a creative and
          detail-oriented UI/UX designer with 2+ years of experience translating
          user needs into engaging digital experiences. I am proficient in
          leveraging design thinking methodologies and user-centered design
          principles to deliver intuitive and visually compelling interfaces.
        </p>

        <p className="p-4">
          {' '}
          I have a proven track record of collaborating with cross-functional
          teams to deliver projects on time and within budget. I am passionate
          about staying updated on emerging design trends and technologies to
          drive innovation and deliver impactful solutions.
        </p>
      </div>
      <div className="whatdrivesme ">
        <h1 className="p-4 pt-9 text-2xl text-center">What Drives Me?</h1>

        <p className="p-4">
          My mission is to create solutions that feel just right. I believe in
          continuous iteration, always refining designs to build products that
          users genuinely love. My approach centers on transforming user
          feedback into meaningful improvements and I’m driven by the challenge
          of solving complex design problems.
        </p>
      </div>
      <div className="productivity-tools">
        <h1 className="p-4 pt-9 text-2xl text-center">Productivity Tools</h1>
        <p className="p-4">
          My design toolkit is filled with powerful tools like:
        </p>
        <ol className="list-disc pl-9">
          <li className="pl-4 pb-1">Figma</li>
          <li className="pl-4 pb-1">Figjma</li>
          <li className="pl-4 pb-1">Corel Draw</li>
          <li className="pl-4 pb-1">Miro</li>
          <li className="pl-4 pb-1">Discord</li>
          <li className="pl-4 pb-1">whimisical</li>
          <li className="pl-4 pb-1">Trello</li>
          <li className="pl-4 pb-1">Jira</li>
          <li className="pl-4 pb-1">Notion</li>
          <li className="pl-4 pb-1">Slack</li>
          <li className="pl-4 pb-1">Clickup</li>
          <li className="pl-4 pb-1">Microsoft Excel</li>
        </ol>
      </div>
      <div className="skills pb-6">
        <h1 className="text-center text-2xl p-4 pt-6 ">Skills</h1>
        <p className="p-4">My skills includes:</p>
        <ol className="list-disc pl-9">
          <li className="p-1">Prototyping</li>
          <li className="p-1">Wireframing</li>
          <li className="p-1">Interaction Design</li>
          <li className="p-1">Design Sprints</li>
          <li className="p-1">User Research</li>
          <li className="p-1">Information Architecture</li>
        </ol>
      </div>
      <div className="design-process pb-6">
        <h1 className="p-4 text-center text-2xl">Design Process</h1>
        <p className="p-4">
          I typically embrace a non-linear design thinking process, which is
          ideal for situations where the problem isn’t fully defined, or
          challenges are still emerging. While I apply the same general
          framework across the projects in this portfolio, the process is
          flexible and adapts to each unique situation.
        </p>
        <p className="p-4">
          It can start at any point and loop back as needed, depending on
          factors like whether user research has already been conducted by the
          client, if stakeholders are ready to jump into a known product, or in
          cases like digital transformation projects.{' '}
        </p>
        <p className="p-4">
          I am passionate about building meaningful connections, so feel free to
          reach out if you’d like to chat about design, collaborate on a
          project, or share your favourite design ideas. Let’s work together to
          make the digital world better, one pixel at a time!
        </p>
        <div className="flex p-4 space-x-3">
          <div className="flex justify-center items-center flex-col">
            {' '}
            <div className="bg-[#BA9B37] rounded-[100%]  flex justify-center items-center w-[55px] h-[55px]">
              <img src={brain} alt="brain-pic  " />
            </div>
            <p>Empathise</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="bg-[#BA9B37] rounded-[100%]  flex justify-center items-center w-[55px] h-[55px]">
              <img src={define} alt="define" />
            </div>
            <p>Define</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="bg-[#BA9B37] rounded-[100%]  flex justify-center items-center w-[55px] h-[55px]">
              <img src={ideate} alt="ideal" />
            </div>
            <p>Ideate</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="bg-[#BA9B37] rounded-[100%]  flex justify-center items-center w-[55px] h-[55px]">
              <img src={prototype} alt="prototype" />
            </div>
            <p>Prototype</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="bg-[#BA9B37] rounded-[100%]  flex justify-center items-center w-[55px] h-[55px]">
              <img src={testinig} alt="test" />
            </div>
            <p>Test</p>
          </div>
        </div>
      </div>
      <div className="let-connects mt-5 p-4">
        <h1 className="text-center text-[32px] font-poppins">
          Let’s work together
        </h1>
        <p className="text-center w-[400px]">
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

export default AboutMe;
