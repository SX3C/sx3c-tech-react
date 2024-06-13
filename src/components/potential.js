import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgWebsite } from "react-icons/cg";
import { SiTaichigraphics } from "react-icons/si";
import { PiVideoFill } from "react-icons/pi";

import { MdAnimation } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

import "../styles/home.css";
import { Tooltip } from "react-tooltip";

export default function Potential() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="flex justify-center mt-20"
    >
      <div className="h-96 w-[80vw] radial-background rounded-lg my-20 text-center flex flex-col justify-center">
        <div className="text-3xl font-bold">Where Potential finds Ignition</div>
        <div className="mt-4">
          <div className="px-4">
            With houses that support various fields of computers science and
            technology,
            <br className="hidden md:block" />
            &#160; we aim to provide a holistic and interactive approach to
            learning.
          </div>
          <div className="flex items-center justify-center mt-10">
            <CgWebsite
              data-tooltip-id="web-dev-house-tip"
              data-tooltip-content="Web Development House"
              className="px-6 size-20 tooltip-item"
            />
            <SiTaichigraphics
              data-tooltip-id="graphics-house-tip"
              data-tooltip-content="Graphics Design House"
              className="px-6 size-20 tooltip-item"
            />
            <FaDatabase
              data-tooltip-id="data-sci-house-tip"
              data-tooltip-content="Data Science House"
              className="px-6 size-20 tooltip-item"
            />
            <PiVideoFill
              data-tooltip-id="video-house-tip"
              data-tooltip-content="Video Editing House"
              className="px-6 size-20 tooltip-item"
            />
            <MdAnimation
              data-tooltip-id="animation-house-tip"
              data-tooltip-content="Animation House"
              className="px-6 size-20 tooltip-item"
            />
            <Tooltip id="web-dev-house-tip" />
            <Tooltip id="graphics-house-tip" />
            <Tooltip id="data-sci-house-tip" />
            <Tooltip id="video-house-tip" />
            <Tooltip id="animation-house-tip" />
          </div>
        </div>
      </div>
    </div>
  );
}
