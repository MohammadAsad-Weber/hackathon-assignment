import React from "react";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <section id="header" className="h-20 px-20 relative flex items-center justify-between border-b-4 border-[#b026ff80] bg-black/90">
      {/* Logo */}
      <img src={Logo} alt="DcodeBlock Logo" className="aspect-auto h-20" />
      {/* Button */}
      <div className="cursor-pointer w-36 h-14 flex gap-1">
        {/* Rectangle 1120 */}
        <div className="h-full w-2.5 flex items-center justify-center clip-1 bg-[#b026ff80]">
          {/* inner div */}
          <div className="h-[95%] w-[65%] clip-1-0 bg-black"></div>
        </div>
        {/* Rectangle 1119 */}
        <div className="h-full w-full flex items-center justify-center clip-2 bg-[#B026FF80]">
          {/* inner div */}
          <div className="h-[95%] w-[97.5%] flex items-center justify-center clip-2-0 bg-black">
            Sign in
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
