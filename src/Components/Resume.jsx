import React from 'react';
import { FiDownload } from 'react-icons/fi';
import resume from '../Assets/KALEJAYE SUNDAY CV.pdf';

function Resume() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[76vh] bg-black">
        <h1 className="text-2xl font-bold text-white">check out my resume</h1>
        <p className="mt-3 text-lg text-white">
          Kindly click on the button below to download my resume
        </p>
        <a
          href={resume}
          download={resume}
          className="mt-5 px-6 py-3 flex text-white bg-[#BA9B37] rounded-lg hover:bg-green-500"
        >
          <FiDownload className="mr-2 mt-1" /> `Download
        </a>
        `
      </div>
    </div>
  );
}

export default Resume;
