import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AsyncImage } from "loadable-image";

export default function ExecutiveSingle({ executive }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex flex-col items-center relative w-full"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <AsyncImage
        src={executive.image}
        loader={<div style={{ background: "#888" }} />}
        error={<div style={{ background: "#eee" }} />}
        style={{ width: "24rem", height: "24rem" }}
        alt={executive.name}
        className="rounded-full"
      />
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 font-bold text-center">
        {executive.name}
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 rounded-sm px-4 text-[#cbd4d6] text-center">
        {executive.post}
      </h2>
    </div>
  );
}
