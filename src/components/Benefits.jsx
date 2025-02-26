import React from "react";
import Lightning from "../assets/lightning.png"; // Thunderbolt Image
import YouTubeLink from "../assets/youtube-link.png"; // YouTube Video Image

function Benefits() {
  return (
    <section className="h-fit py-16 px-10 relative flex items-center justify-center bg-[linear-gradient(135deg,_#31213b_0%,_#110618_100%)]">
      {/* Thunderbolt Image */}
      <img
        src={Lightning}
        alt="Lightning Image"
        className="aspect-auto h-16 absolute -left-1.5 top-0.5 rotate-180 lg:h-20 lg:top-20 xl:h-36"
      />
      {/* Inner div */}
      <div className="w-full flex flex-col-reverse items-center justify-evenly gap-10 lg:flex-row lg:items-end">
        {/* Detail Box */}
        <div className="max-w-lg w-full flex flex-col gap-2.5 sm:gap-5 lg:-translate-y-2.5 xl:gap-10">
          {/* Row number 1 */}
          <div style={{ textShadow: "0 1.5px 3px rgba(255, 255, 255, 0.75)" }}>
            <h3 className="text-2xl sm:text-4xl xl:text-5xl">150+</h3>
            <p className="text-sm sm:text-lg xl:text-xl">Universities participating</p>
          </div>
          {/* Row number 2 */}
          <div className="flex items-center gap-5 sm:gap-10 xl:gap-16">
            {/* Column number 1 */}
            <div>
              <h3 className="text-2xl sm:text-4xl xl:text-5xl">72+</h3>
              <p className="text-sm sm:text-lg xl:text-xl">Judges</p>
            </div>
            {/* Column number 2 */}
            <div>
              <h3 className="text-2xl sm:text-4xl xl:text-5xl">21</h3>
              <p className="text-sm sm:text-lg xl:text-xl">Hackathons</p>
            </div>
            {/* Column number 3 */}
            <div>
              <h3 className="text-2xl sm:text-4xl xl:text-5xl">36+</h3>
              <p className="text-sm sm:text-lg xl:text-xl">Great Speakers</p>
            </div>
          </div>
        </div>
        {/* YouTube Video Image */}
        <img
          src={YouTubeLink}
          alt="YouTube Link"
          className="aspect-video max-w-lg w-full xl:max-w-screen-sm"
        />
      </div>
    </section>
  );
}

export default Benefits;
