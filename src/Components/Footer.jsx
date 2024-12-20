import React from 'react';
import { Link } from 'react-router-dom';
import mailicon from '../Assets/mailicon.png';
import Linkedin from '../Assets/Linkedinicon.png';
import twittericon from '../Assets/twittericon.png';
import insta from '../Assets/insta.png';
import be from '../Assets/be.png';

function Footer() {
  return (
    <div className="bg-black flex border border-t-1 p-4">
      <div className="ml-10">
        <h1 className="text-white text-[24px] font-zeyada">Adéfare</h1>
      </div>
      <div className="flex ml-[7rem] space-x-6 ">
        <Link>
          <img src={mailicon} alt="mail" />
        </Link>
        <Link>
          <img src={Linkedin} alt="linkedin" />
        </Link>
        <Link>
          <img src={twittericon} alt="twitter" />
        </Link>
        <Link>
          <img src={be} alt="be" />
        </Link>
        <Link>
          <img src={insta} alt="instagram" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
