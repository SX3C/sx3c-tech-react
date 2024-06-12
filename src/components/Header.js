import React from "react";
import Executives from "./executives";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex justify-between w-[80vw] m-auto items-center 2xl:items-start flex-col-reverse 2xl:h-96 2xl:flex-row">
        <div>
          <Link to="/">
            <div className="flex items-center justify-center 2xl:justify-start">
              <img
                src="/logo/sx3c logo circular.svg"
                alt="logo"
                className="h-28 w-28"
              />
              <div className="text-xl sm:text-3xl font-bold">
                Computer Club @SXC
              </div>
            </div>
          </Link>
          <div className="text-center">
            A Club Dedicated to Learning, Innovation and Influence.
          </div>
          <div className="mt-10 text-2xl flex-wrap justify-center md:justify-start hidden md:flex">
            <div className="mx-2 bg-gray-700 text-white px-10 py-2 rounded-lg hover:bg-white hover:text-black duration-75 cursor-pointer mt-2">
              TEAM
            </div>
            <div className="mx-2 bg-gray-700 text-white px-10 py-2 rounded-lg hover:bg-white hover:text-black duration-75 cursor-pointer mt-2">
              CONTACT
            </div>
            <Link
              to="/houses"
              className="mx-2 bg-gray-700 text-white px-10 py-2 rounded-lg hover:bg-white hover:text-black duration-75 cursor-pointer mt-2"
            >
              HOUSES
            </Link>
          </div>
        </div>
        <img
          src="/logo/sx3c logo.svg"
          alt="logo"
          className="h-[90%] -translate-y-5"
        />
      </div>
    </>
  );
}
