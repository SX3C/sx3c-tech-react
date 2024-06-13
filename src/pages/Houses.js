import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExecutiveSingle from "../components/ExecutiveSingle";

export default function Houses() {
  return (
    <div>
      <Header />
      <div className="w-2/3 mx-auto">
        <div className="font-bold text-4xl lg:text-6xl text-center my-16">
          Houses&HouseMasters@SX3C
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10"
        >
          <div className="relative">
            <img
              className="w-[50%] rounded-full mb-10 absolute top-[25%] left-0 z-10"
              alt="house illustration"
              src="/houses/game-development.png"
            />
            <ExecutiveSingle
              executive={{
                name: "Adarsha Bhatta",
                image: "/executives/aadarshab.png",
                placeholderimage: "/executives/compressed/aadarshab.png",
                post: "Game Dev Housemaster",
              }}
            />
          </div>
          <div className="relative">
            <img
              className="w-[50%] rounded-full mb-10 absolute top-[25%] left-0 z-10"
              alt="house illustration"
              src="/houses/data-sci.png"
            />
            <ExecutiveSingle
              executive={{
                name: "Rajveer KC",
                image: "/executives/rajveer.png",
                placeholderimage: "/executives/compressed/rajveer.png",
                post: "Data Science Housemaster",
              }}
            />
          </div>
          <div className="relative">
            <img
              className="w-[50%] rounded-full mb-10 absolute top-[25%] left-0 z-10"
              alt="house illustration"
              src="/houses/video-editing.png"
            />
            <ExecutiveSingle
              executive={{
                name: "Anwesh Stha",
                image: "/executives/anwesh.png",
                placeholderimage: "/executives/compressed/anwesh.png",
                post: "Video Editing Housemaster",
              }}
            />
          </div>
          <div className="relative">
            <img
              className="w-[50%] rounded-full mb-10 absolute top-[25%] left-0 z-10"
              alt="house illustration"
              src="/houses/web-dev.png"
            />
            <ExecutiveSingle
              executive={{
                name: "Creation Duwal",
                image: "/executives/creation.png",
                placeholderimage: "/executives/compressed/creation.png",
                post: "Web Dev Housemaster",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
