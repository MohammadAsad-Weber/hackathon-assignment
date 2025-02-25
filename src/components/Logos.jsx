import React from "react";

// Logos
import SingularityBlack from "../assets/singularity-black.png";
import Rair from "../assets/rair.png";
import Stratis from "../assets/stratis.png";
import SharpEconomy from "../assets/sharp-economy.png";
import CSharp from "../assets/csharp.png";
import BeyondTheCode from "../assets/beyond-the-code.png";

function Logos() {
  return (
    <section className="h-25 p-5 flex items-center justify-evenly gap-5 bg-[#D9D9D9]">
      <img src={SingularityBlack} alt="Singularity Image" className="aspect-auto h-full" />
      <img src={Rair} alt="Rair Image" className="aspect-auto h-full" />
      <img src={Stratis} alt="Stratis Image" className="aspect-auto h-full" />
      <img src={SharpEconomy} alt="Sharp Economy Image" className="aspect-auto h-full" />
      <img src={CSharp} alt="CSharp.TV Image" className="aspect-auto h-full" />
      <img src={BeyondTheCode} alt="Beyond The Code Image" className="aspect-auto h-full" />
    </section>
  );
}

export default Logos;
