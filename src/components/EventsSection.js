import React from "react";

export default function EventsSection() {
  return (
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
              At SX3C, we believe in the power of collective effort in change.
              Our Events aims on cultivating the spirit of innovation and
              creativity among the students.
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
                      7th-8th September 2024
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Science Fest
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Science Fest is a two-day event where students from all
                      over the country come together to showcase their
                      scientific talents. Contestsants play quizzes and
                      particiate in competitions to proceed further into the
                      challenge.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-start md:justify-between items-center w-full right-timeline">
                  <div className="order-1 w-3/12 md:w-5/12" />
                  <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left">
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
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Tech Day
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      A celebration of the spirit of technology and innovation.
                      A day of technological fun and learning.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-start md:justify-between items-center w-full right-timeline">
                  <div className="order-1 w-3/12 md:w-5/12" />
                  <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      SX3C Skill Showcase
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Bring your skills to the table and showcase them in their
                      full might.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-start md:justify-between flex-row  md:flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-3/12 md:w-5/12" />
                  <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left md:text-right">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Code Hiking
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      A day-long event where participants embody the spirit of
                      the fusion of nature and technology.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-start md:justify-between items-center w-full right-timeline">
                  <div className="order-1 w-3/12 md:w-5/12" />
                  <div className="order-1 w-7/12 md:w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      T-Shirt Design Competition
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Design the official SX3C T-shirt and win one for yourself.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="mx-auto -mt-18 md:-mt-36"
                alt="rocket-timeline"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
