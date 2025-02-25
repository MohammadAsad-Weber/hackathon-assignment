import React from "react";

function Footer() {
  return (
    <footer className="h-[20vh] flex items-center justify-center bg-[linear-gradient(300deg,_#31213b_0%,_#110618_100%)]">
      <div className="w-full flex items-center justify-around">
        <h4>
          Copyright <span className="text-gray-500">©</span> 2024 DcodeBlock
        </h4>
        <div className="flex items-center gap-5">
          <h3>Help Center</h3>|<h3>Terms and Conditions</h3>|
          <h3>Privacy policy</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
