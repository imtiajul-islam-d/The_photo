import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section>
      <section className="h-screen relative">
        {/* top */}
        <div className="h-[40%] overflow-hidden">
          <img className="w-full" src="testBanner.jpg" alt="" />
        </div>
        {/* bottom */}
        <div className="h-[60%]"></div>
        {/* above section */}
        <div className="bg-white max-w-3xl absolute top-[40%] translate-y-[-40%] left-2/4 translate-x-[-50%] w-[90%] lg:w-full min-h-[70%] rounded-m flex items-center justify-center">
          <div className="p-4 flex flex-col justify-around">
            <div className="w-full flex flex-row justify-center ">
              <img
                className="rounded-full w-52 h-52"
                src="testProfile.jpg"
                alt=""
              />
              <br />
            </div>
            <div className="text-center mt-5">
              <h2 className="font-bold text-3xl">Mr. Photographer</h2>
              <p className="text-lg mt-2">
                EMAIL: photographer@photographer.com
              </p>
              <div className="flex justify-center items-center space-x-5 pt-4 text-2xl">
                <span className="cursor-pointer">
                  <FaInstagram></FaInstagram>
                </span>
                <span className="cursor-pointer">
                  <FaLinkedin></FaLinkedin>
                </span>
                <span className="cursor-pointer">
                  <FaFacebook></FaFacebook>
                </span>
              </div>
              <h2 className="text-center mt-3 font-bold text-green-700 text-2xl">
                BANGLADESH
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-red-500">

      </section>
    </section>
  );
};

export default Home;
