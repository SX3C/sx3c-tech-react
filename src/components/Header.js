import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex justify-between w-[80vw] m-auto items-center 2xl:items-start flex-col-reverse 2xl:h-96 2xl:flex-row">
        <div>
          <Link to="/">
            <div className="flex items-center justify-center 2xl:justify-start mb-2">
              <img
                src="/logo/logo-text.png"
                alt="logo"
                className="h-14 w-14 rounded-full mr-4"
              />
              <div className="text-2xl sm:text-3xl font-bold">
                Computer Club @SXC
              </div>
            </div>
          </Link>
          <div className="text-center">
            A Club Dedicated to Learning, Innovation and Influence.
          </div>
          <div className="mt-10 text-2xl flex-wrap justify-center md:justify-start hidden md:flex">
            <Link
              to="/"
              className="mx-2 bg-gray-700 text-white px-10 py-2 rounded-lg hover:bg-white hover:text-black duration-75 cursor-pointer mt-2"
            >
              TEAM
            </Link>
            <a
              href="https://www.facebook.com/sxc.computerclub"
              className="mx-2 bg-gray-700 text-white px-10 py-2 rounded-lg hover:bg-white hover:text-black duration-75 cursor-pointer mt-2"
              target="_blank"
              rel="noreferrer"
            >
              CONTACT
            </a>
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
          className="h-[90%] trnaslate-y-0 2xl:-translate-y-14"
        />
      </div>
    </>
  );
}
