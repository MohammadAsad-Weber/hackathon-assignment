import React from "react";
import UniversitiesImages from "../assets/universities.png";

function Universities() {
  return (
    <section className="h-40 overflow-y-hidden p-5 flex bg-[#D9D9D9]">
      <img
        src={UniversitiesImages}
        alt="Universities Images"
        className="w-full h-full object-cover object-top"
      />
    </section>
  );
}

export default Universities;
