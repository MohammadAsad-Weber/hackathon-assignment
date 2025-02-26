import React from "react";
import UniversitiesImages from "../assets/universities.png"; // Universities Images

function Universities() {
  return (
    <section className="h-fit w-full p-2.5 flex bg-[#D9D9D9]">
      <img
        src={UniversitiesImages}
        alt="Universities Images"
        className="w-full h-full object-contain"
      />
    </section>
  );
}

export default Universities;
