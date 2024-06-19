import React from "react";
import Header from "../components/Header";
import Executives from "../components/executives";
import Footer from "../components/Footer";

import Potential from "../components/potential";

export default function Home() {
  return (
    <>
      <div className="bg-gray-800  text-white">
        <div className="hero-section bg-gradient-to-b from-[#202020]  to-gray-800 pt-5">
          {/* Logo Section */}
          <Header />
          {/* Hero Section */}
          <div className="flex flex-col items-center mt-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Code. Compute. Create.{" "}
            </h1>
            <h2 className="text-xl md:text-3xl mt-5">
              St. Xavier's College Computer Club
            </h2>
            <a
              href="mailto:sx3c@sxc.edu.np"
              className="bg-gray-300 px-4 py-2 rounded-lg text-black flex items-center mt-4"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 58 58"
                className="mx-2"
              >
                <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001 c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0 s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013 c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028 c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58 s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04 C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217 c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882 C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972 c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963 c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028 c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438 c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036 C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835 c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072 c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30 H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318 c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038 c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972 c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003 c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846 z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781 C44.177,52.078,38.672,54.958,32.521,55.763z" />
              </svg>
              sx3c@sxc.edu.np
            </a>
          </div>
        </div>

        {/* Potential Section */}
        <Potential />

        {/* Timeline Section */}
        <section>
          <div className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
              <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                  EVENTS
                </p>
                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                  Events@SX3C
                </p>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                  At SX3C, we believe in the power of collective effort in
                  change. Our Events aims on cultivating the spirit of
                  innovation and creativity among the students.
                </p>
                <a
                  href="https://www.facebook.com/sxc.computerclub"
                  className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent duration-75"
                >
                  Explore Now
                </a>
              </div>
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-10 h-full">
                    {/* <div className="border-2-2 border-yellow-555 absolute h-full right-[50%] rounded-full" /> */}
                    <div className="border-2 border-yellow-500 absolute h-full left-[25%] md:left-[50%] rounded-[1%]" />
                    <div className="mb-8 flex justify-start md:justify-between flex-row  md:flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-3/12 md:w-5/12" />
                      <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left md:text-right">
                        <p className="mb-3 text-base text-yellow-300">
                          31 Aug & Sept 1, 2024
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Science Fest
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Science Fest is a two-day event where students from
                          all over the country come together to showcase their
                          scientific talents. Contestsants play quizzes and
                          particiate in competitions to proceed further into the
                          challenge.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-start md:justify-between items-center w-full right-timeline">
                      <div className="order-1 w-3/12 md:w-5/12" />
                      <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-yellow-300">
                          1-30 Oct, 2024
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Hacktoberfest Challenges
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Learn and Contribute to open source projects and win
                          exciting prizes.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-start md:justify-between flex-row  md:flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-3/12 md:w-5/12" />
                      <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left md:text-right">
                        <p className="mb-3 text-base text-yellow-300">
                          16 Nov 2024
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Tech Day
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          A celebration of the spirit of technology and
                          innovation. A day of technological fun and learning.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-start md:justify-between items-center w-full right-timeline">
                      <div className="order-1 w-3/12 md:w-5/12" />
                      <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-yellow-300">
                          13 Feb, 2025
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          SX3C Skill Showcase
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Bring your skills to the table and showcase them in
                          their full might.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-start md:justify-between flex-row  md:flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-3/12 md:w-5/12" />
                      <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left md:text-right">
                        <p className="mb-3 text-base text-yellow-300">
                          17 Jan 2025
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Code Hiking
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          A day-long event where participants embody the spirit
                          of the fusion of nature and technology.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-start md:justify-between items-center w-full right-timeline">
                      <div className="order-1 w-3/12 md:w-5/12" />
                      <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-yellow-300">
                          9-15 Sept 2024
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          T-Shirt Design Competition
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Design the official SX3C T-shirt and win one for
                          yourself.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="mx-auto -mt-18 md:-mt-36"
                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End timeline section */}

        <Executives />
        <Footer />
      </div>
    </>
  );
}
