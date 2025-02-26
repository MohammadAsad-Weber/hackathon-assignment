import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

// Sub-component
function Hamburger(props) {
  return (
    <div
      style={props.show ? { left: "0" } : { left: "-100%" }}
      className="h-screen w-screen fixed z-50 top-0 bg-black/50"
    >
      <div
        style={props.show ? { left: "0" } : { left: "-100%" }}
        className="h-full max-w-md w-full min-w-80 absolute top-0 bg-stone-950 backdrop-blur-sm transition-['left'] duration-300 delay-[50ms]"
      >
        <div className="h-20 px-3.5 relative flex items-center justify-between border-b-2 border-[#870ecda5] shadow-md shadow-[#870ecda5]">
          <img
            src={Logo}
            alt="DcodeBlock Logo"
            className="aspect-auto h-20 -ml-3.5"
          />
          <button onClick={() => props.setShow(false)} className="text-3xl">
            <IoClose />
          </button>
        </div>
        <ul className="w-full py-5 px-7.5 text-[#D9D9D9] flex flex-col gap-7.5 sm:text-lg md:text-xl">
          <li>Overview</li>
          <li>Create Team</li>
          <li>Prizes and Sponsors</li>
          <li>FAQs</li>
          <li>Judging & Rules</li>
          <li>Resources</li>
        </ul>
      </div>
    </div>
  );
}

function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section
        id="header"
        className="h-20 px-3.5 relative flex items-center justify-between border-b-4 border-[#b026ff80] bg-black/90 sm:px-5 md:px-10 xl:px-20"
      >
        {/* Logo */}
        <img
          src={Logo}
          alt="DcodeBlock Logo"
          className="aspect-auto h-20 -ml-3.5"
        />
        {/* Sign in Button */}
        <div className="hidden cursor-pointer w-36 h-14 gap-1 xl:flex">
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
        {/* Hamburger Menu Button */}
        <button onClick={() => setShow(true)} className="text-3xl xl:hidden">
          <IoMenu />
        </button>
      </section>
      <Hamburger show={show} setShow={setShow} />
    </>
  );
}

export default Header;
