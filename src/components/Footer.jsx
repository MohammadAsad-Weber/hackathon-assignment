import React from "react";

function Footer() {
  return (
    <footer className="h-fit min-h-[20vh] py-10 flex items-center justify-center bg-[linear-gradient(300deg,_#31213b_0%,_#110618_100%)]">
      {/* Container */}
      <div className="w-full flex flex-col items-center justify-around gap-5 sm:flex-row">
        {/* Copyright Statement */}
        <h4>
          Copyright <span className="text-gray-500">©</span> 2024 DcodeBlock
        </h4>
        {/* Links */}
        <div className="flex flex-col items-center gap-2.5 lg:flex-row lg:gap-5">
          <h3>Help Center</h3>
          <span className="hidden lg:inline">|</span>
          <h3>Terms and Conditions</h3>
          <span className="hidden lg:inline">|</span>
          <h3>Privacy policy</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
