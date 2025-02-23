import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-44 mx-auto mb-4 " />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          beraankan8@gmail.com
        </div>
      </div>

      {/* ------Last Footer Links---- */}
      <div className="text-center sm:flex itens-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Ankan Bera. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-between mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Ankan-B10">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ankan-bera-8a2920244/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/AnkanBera2003">
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/ankanbera10/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
