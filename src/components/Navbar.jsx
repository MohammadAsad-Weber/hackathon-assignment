import React from "react";
import HackIndia from "../assets/hackindia.png";

// Sub-Component
function Button(props) {
  return (
    <div className="group cursor-pointer w-fit h-10 text-nowrap flex gap-0.5">
      {/* Rectangle 1120 */}
      <div className="h-full w-1.5 flex items-center justify-center clip-1 bg-[#B026FF]">
        {/* inner div */}
        <div className="h-[95%] w-[80%] clip-1-0 bg-[#360b4f] transition-colors duration-300 group-hover:bg-transparent"></div>
      </div>
      {/* Rectangle 1119 */}
      <div className="h-full w-fit flex items-center justify-center clip-2 bg-[#B026FF]">
        {/* inner div */}
        <div className="h-[95%] w-[97.5%] px-5 flex items-center justify-center clip-2-0 bg-[#360b4f] transition-colors duration-300 group-hover:bg-[#481167]">
          {props.text}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="hidden absolute z-[1] top-32 left-1/2 -translate-x-1/2 items-center justify-center gap-10 xl:flex">
      {/* HackIndia Logo & Text */}
      <div className="flex items-center justify-center gap-2.5">
        <img
          src={HackIndia}
          alt="Hackindia Logo"
          className="aspect-square w-10"
        />
        <h3 className="tracking-widest uppercase text-xl">Hackindia</h3>
      </div>
      {/* Scroll container */}
      <div className="h-16 max-w-fit w-full sticky top-2.5 py-2.5 px-7.5 tracking-wider text-xs flex items-center gap-3.5 bg-[#28083A] border border-[#DFDFDF1A] rounded-xl shadow-[0_1px_4px_#D9D9D94D]">
        <Button text="Overview" />
        <Button text="Create Team" />
        <Button text="Prizes & Sponsors" />
        <Button text="FAQs" />
        <Button text="Judging & Rules" />
        <Button text="Resources" />
      </div>
    </nav>
  );
}

export default Navbar;
