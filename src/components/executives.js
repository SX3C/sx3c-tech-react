import React from "react";
import ExecutiveSingle from "./ExecutiveSingle";

const executives = [
  {
    name: "Bipul Kharel",
    image: "/executives/bipul.png",
    placeholderimage: "/executives/compressed/bipul-compressed.png",
    post: "President",
  },
  {
    name: "Shabdi Satyal",
    image: "/executives/shabdi.png",
    placeholderimage: "/executives/compressed/shabdi-compressed.png",
    post: "Secretary",
  },
  {
    name: "Saphal Paudel",
    image: "/executives/saphal.png",
    placeholderimage: "/executives/compressed/saphal-compressed.png",
    post: "Event Manager",
  },
  {
    name: "Shekhar Shah",
    image: "/executives/shekhar.png",
    placeholderimage: "/executives/compressed/shekhar-compressed.png",
    post: "Treasurer",
  },
  {
    name: "Prapti Subedi",
    image: "/executives/prapti.png",
    placeholderimage: "/executives/compressed/prapti-compressed.png",
    post: "Marketing Head",
  },
  {
    name: "Prashant Budathohki",
    image: "/executives/prashant.png",
    placeholderimage: "/executives/compressed/prashant-compressed.png",
    post: "Spokesperson",
  },
  {
    name: "Imon Baral",
    image: "/executives/imon.png",
    placeholderimage: "/executives/compressed/imon-compressed.png",
    post: "Public Relations",
  },
  {
    name: "Hardik Batash",
    image: "/executives/hardik.png",
    placeholderimage: "/executives/compressed/hardik-compressed.png",
    post: "Event Manager",
  },
  {
    name: "Pratik Bhandari",
    image: "/executives/pratik.png",
    placeholderimage: "/executives/compressed/pratik-compressed.png",
    post: "Human Resource Manager",
  },
  {
    name: "Bibek Gautam",
    image: "/executives/bibek.png",
    placeholderimage: "/executives/compressed/bibek-compressed.png",
    post: "Human Resource Manager",
  },
  {
    name: "Aarya KC",
    image: "/executives/aarya.png",
    placeholderimage: "/executives/compressed/aarya-compressed.png",
    post: "Human Resource Manager",
  },
  {
    name: "Adarsha Bhatta",
    image: "/executives/aadarshab.png",
    placeholderimage: "/executives/compressed/aadarshab-compressed.png",
    post: "Game Dev Housemaster",
  },
  {
    name: "Creation Duwal",
    image: "/executives/creation.png",
    placeholderimage: "/executives/compressed/creation-compressed.png",
    post: "Web Dev Housemaster",
  },
  {
    name: "Rajveer KC",
    image: "/executives/rajveer.png",
    placeholderimage: "/executives/compressed/rajveer-compressed.png",
    post: "Data Science Housemaster",
  },
  {
    name: "Anwesh Shrestha",
    image: "/executives/anwesh.png",
    placeholderimage: "/executives/compressed/anwesh-compressed.png",
    post: "Video Editing Housemaster",
  },
  {
    name: "Darshan Subedi",
    image: "/executives/darshan.png",
    placeholderimage: "/executives/compressed/darshan-compressed.png",
    post: "A4 Assembeler",
  },

  {
    name: "Aadarsh Thakur",
    image: "/executives/aadarshat.png",
    placeholderimage: "/executives/compressed/aadarshat-compressed.png",
    post: "A4 Executuive",
  },
  {
    name: "Sameer Thakur",
    image: "/executives/sameer.png",
    placeholderimage: "/executives/compressed/sameer-compressed.png",
    post: "A4 Executuive",
  },
  {
    name: "Sanu Patel",
    image: "/executives/sanu.png",
    placeholderimage: "/executives/compressed/sanu-compressed.png",
    post: "A4 Executuive",
  },
];

export default function Executives() {
  return (
    <div id="executive-team">
      <div className="font-bold text-4xl lg:text-6xl text-center mt-32">
        The Executive Team
      </div>
      <div className="mx-auto w-[80vw] 2xl:w-[90rem] mt-20 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {executives.map((executive, index) => (
          <div index={index}>
            <ExecutiveSingle executive={executive} />
          </div>
        ))}
      </div>
    </div>
  );
}
