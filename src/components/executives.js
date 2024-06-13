import React from "react";
import ExecutiveSingle from "./ExecutiveSingle";

const executives = [
  {
    name: "Bipul Kharel",
    image: "/executives/bipul.png",
    placeholderimage: "/executives/compressed/bipul.png",
    post: "President",
  },
  {
    name: "Shabdi Satyal",
    image: "/executives/shabdi.png",
    placeholderimage: "/executives/compressed/shabdi.png",
    post: "Secretary",
  },
  {
    name: "Saphal Paudel",
    image: "/executives/saphal.png",
    placeholderimage: "/executives/compressed/saphal.png",
    post: "Event Manager",
  },
  {
    name: "Shekhar Shah",
    image: "/executives/shekhar.png",
    placeholderimage: "/executives/compressed/shekhar.png",
    post: "Treasurer",
  },
  {
    name: "Prapti Subedi",
    image: "/executives/prapti.png",
    placeholderimage: "/executives/compressed/prapti.png",
    post: "Marketing Head",
  },
  {
    name: "Prashant Budathohki",
    image: "/executives/prashant.png",
    placeholderimage: "/executives/compressed/prashant.png",
    post: "Spokesperson",
  },
  {
    name: "Imon Baral",
    image: "/executives/imon.png",
    placeholderimage: "/executives/compressed/imon.png",
    post: "Public Relations",
  },
  {
    name: "Pratik Bhandari",
    image: "/executives/pratik.png",
    placeholderimage: "/executives/compressed/pratik.png",
    post: "Human Resource Manager",
  },
  {
    name: "Bibek Gautam",
    image: "/executives/bibek.png",
    placeholderimage: "/executives/compressed/bibek.png",
    post: "Human Resource Manager",
  },
  {
    name: "Adarsha Bhatta",
    image: "/executives/aadarshab.png",
    placeholderimage: "/executives/compressed/aadarshab.png",
    post: "Game Dev Housemaster",
  },
  {
    name: "Creation Duwal",
    image: "/executives/creation.png",
    placeholderimage: "/executives/compressed/creation.png",
    post: "Web Dev Housemaster",
  },
  {
    name: "Rajveer KC",
    image: "/executives/rajveer.png",
    placeholderimage: "/executives/compressed/rajveer.png",
    post: "Data Science Housemaster",
  },
  {
    name: "Anwesh Shrestha",
    image: "/executives/anwesh.png",
    placeholderimage: "/executives/compressed/anwesh.png",
    post: "Video Editing Housemaster",
  },
  {
    name: "Darshan Subedi",
    image: "/executives/darshan.png",
    placeholderimage: "/executives/compressed/darshan.png",
    post: "A4 Assembeler",
  },

  {
    name: "Aadarsh Thakur",
    image: "/executives/aadarshat.png",
    placeholderimage: "/executives/compressed/aadarshat.png",
    post: "A4 Executuive",
  },
  {
    name: "Sameer Thakur",
    image: "/executives/sameer.png",
    placeholderimage: "/executives/compressed/sameer.png",
    post: "A4 Executuive",
  },
  {
    name: "Sanu Patel",
    image: "/executives/sanu.png",
    placeholderimage: "/executives/compressed/sanu.png",
    post: "A4 Executuive",
  },
];

export default function Executives() {
  return (
    <div id="executive-team">
      <div className="font-bold text-4xl lg:text-6xl text-center mt-32">
        The Executive Team
      </div>
      <div className="mx-auto w-[80vw] mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {executives.map((executive, index) => (
          <div index={index}>
            <ExecutiveSingle executive={executive} />
          </div>
        ))}
      </div>
    </div>
  );
}
