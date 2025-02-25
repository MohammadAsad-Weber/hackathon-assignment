import React from "react";
import Lightning from "../assets/lightning.png";
import YouTubeLink from "../assets/youtube-link.png";

function Benefits() {
  return (
    <section className="h-[85vh] px-10 relative flex items-center justify-center bg-[linear-gradient(135deg,_#31213b_0%,_#110618_100%)]">
      {/* Lightning Image */}
      <img
        src={Lightning}
        alt="Lightning Image"
        className="aspect-auto h-48 absolute -left-1.5 top-20 rotate-180"
      />
      {/* Inner div */}
      <div className="w-full flex items-end justify-evenly gap-10">
        {/* Flex Box */}
        <div className="max-w-lg w-full flex flex-col gap-10 -translate-y-2.5">
          {/* Row number 1 */}
          <div style={{ textShadow: "0 1.5px 3px rgba(255, 255, 255, 0.75)" }}>
            <h3 className="text-5xl">150+</h3>
            <p className="text-lg">Universities participating</p>
          </div>
          {/* Row number 2 */}
          <div className="flex items-center gap-16">
            {/* Column number 1 */}
            <div>
              <h3 className="text-5xl">72+</h3>
              <p className="text-lg">Judges</p>
            </div>
            {/* Column number 2 */}
            <div>
              <h3 className="text-5xl">21</h3>
              <p className="text-lg">Hackathons</p>
            </div>
            {/* Column number 3 */}
            <div>
              <h3 className="text-5xl">36+</h3>
              <p className="text-lg">Great Speakers</p>
            </div>
          </div>
        </div>
        {/* YouTube Video Image */}
        <img
          src={YouTubeLink}
          alt="YouTube Link"
          className="aspect-video max-w-screen-sm w-full"
        />
      </div>
    </section>
  );
}

export default Benefits;
