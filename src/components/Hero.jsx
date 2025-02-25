import React from "react";
import BackgroundVideo from "../assets/background-video.mp4";
import SingularityLogo from "../assets/singularity.png";

function Hero() {
  return (
    <section className="relative">
      {/* Background Video */}
      <video
        src={BackgroundVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        className="w-full  blur-xs"
      />
      {/* Container */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center justify-center gap-7.5">
        {/* Logo {Singularity} */}
        <img
          src={SingularityLogo}
          alt="Singularity Logo"
          className="aspect-auto h-20"
        />
        {/* Heading */}
        <h1
          style={{ textShadow: "0 4px 8px rgba(255, 255, 255, 0.5)" }}
          className="text-8xl"
        >
          <span className="py-2.5 px-1 bg-orange-500 border rounded">Ha</span>
          ckIndia2025
        </h1>
        {/* Subheading */}
        <h2 className="text-3xl font-bold capitalize font-['VTF']">
          India's biggest web3 & AI hackathon
        </h2>
        {/* Date Box */}
        <div className="py-2.5 px-5 text-xl font-['VTF'] bg-[linear-gradient(91.08deg,_#6A1799_-29.38%,_#230833_105.37%)] border-2 border-[#D9D9D94D] rounded-lg">
          February 28 - September 28
        </div>
        {/* Flex Container */}
        <div className="w-4xl text-2xl font-medium font-['VTF'] flex items-center justify-evenly">
          <h3>
            <span className="text-orange-600">$150+</span> Price Pool
          </h3>
          |
          <h3>
            <span className="text-orange-600">150+</span> University
          </h3>
          |
          <h3>
            <span className="text-orange-600">25,000+</span> Students
          </h3>
        </div>
        {/* Register Button */}
        <div className="cursor-pointer w-40 h-16 font-['VTF'] flex gap-1">
          {/* Rectangle 1120 */}
          <div className="h-full w-2.5 flex items-center justify-center clip-1 bg-[#b026ff80]">
            {/* inner div */}
            <div className="h-[95%] w-[65%] clip-1-0 bg-stone-900"></div>
          </div>
          {/* Rectangle 1119 */}
          <div className="h-full w-full flex items-center justify-center clip-2 bg-[#B026FF80]">
            {/* inner div */}
            <div className="h-[95%] w-[97.5%] flex items-center justify-center clip-2-0 bg-stone-900">
              Register Now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
