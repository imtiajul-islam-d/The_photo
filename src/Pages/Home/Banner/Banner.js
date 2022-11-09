import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="h-screen relative mb-5 lg:mb-0">
      {/* top */}
      <div className="h-[40%] overflow-hidden">
        <img className="h-full w-full lg:h-auto" src="testBanner.jpg" alt="" />
      </div>
      {/* bottom */}
      <div className="h-[60%] overflow-hidden">
        <img
          className="h-full w-full lg:h-auto bg-center"
          src="banner2.jpg"
          alt=""
        />
      </div>
      {/* above section */}
      <div className="bg-white max-w-3xl absolute top-[40%] translate-y-[-40%] left-2/4 translate-x-[-50%] w-[90%] lg:w-full min-h-[70%] rounded-m flex items-center justify-center backdrop-blur-lg bg-white/30 py-4 lg:py-0">
        <div className="flex flex-col justify-around">
          <div className="w-full flex flex-row justify-center ">
            <img
              className="rounded-full w-52 h-52"
              src="testProfile.jpg"
              alt=""
            />
            <br />
          </div>
          <div className="text-center mt-5">
            <h2 className="font-bold text-3xl text-white">Mr. Photographer</h2>
            <p className="text-lg mt-2 text-gray-50">EMAIL: photographer@photographer.com</p>
            <div className="flex justify-center items-center space-x-5 pt-4 text-2xl text-gray-50">
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
            <h2 className="text-center mt-3 font-bold text-gray-50 text-2xl">
              BANGLADESH
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
