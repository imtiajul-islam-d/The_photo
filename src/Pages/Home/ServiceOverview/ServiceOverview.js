import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import img1 from "./../../../../src/img/testBanner.jpg";

const ServiceOverview = () => {
  //   const images = [img1];
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 container mx-auto">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-orange-500">
            FEATURED SERVICES
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {/*article one  */}
          <article className="flex flex-col dark:bg-gray-900 border">
            {/*  */}
            <PhotoProvider>
              <PhotoView src={img1}>
                <img src={img1} alt="" />
              </PhotoView>
            </PhotoProvider>
            {/*  */}

            <div className="flex flex-col flex-1 p-6">
              <span className="text-xl font-bold text-orange-600 tracking-wider uppercase dark:text-violet-400">
                WEDDING
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">
                this is short description this is short description this is
                short description this is short description this is short
                description this is short description
              </h3>
              <div className="flex flex-wrap items-center justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>$1000</span>
                <Link className="btn bg-orange-400 px-4 py-3 text-white hover:text-orange-400 hover:bg-gray-100">
                  View details
                </Link>
              </div>
            </div>
          </article>
          {/*  */}
          {/*article one  */}
          <article className="flex flex-col dark:bg-gray-900 border">
            {/*  */}
            <PhotoProvider>
              <PhotoView src={img1}>
                <img src={img1} alt="" />
              </PhotoView>
            </PhotoProvider>
            {/*  */}

            <div className="flex flex-col flex-1 p-6">
              <span className="text-xl font-bold text-orange-600 tracking-wider uppercase dark:text-violet-400">
                WEDDING
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">
                this is short description this is short description this is
                short description this is short description this is short
                description this is short description
              </h3>
              <div className="flex flex-wrap items-center justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>$1000</span>
                <Link className="btn bg-orange-400 px-4 py-3 text-white hover:text-orange-400 hover:bg-gray-100">
                  View details
                </Link>
              </div>
            </div>
          </article>
          {/*  */}
          {/*article one  */}
          <article className="flex flex-col dark:bg-gray-900 border">
            {/*  */}
            <PhotoProvider>
              <PhotoView src={img1}>
                <img src={img1} alt="" />
              </PhotoView>
            </PhotoProvider>
            {/*  */}

            <div className="flex flex-col flex-1 p-6">
              <span className="text-xl font-bold text-orange-600 tracking-wider uppercase dark:text-violet-400">
                WEDDING
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">
                this is short description this is short description this is
                short description this is short description this is short
                description this is short description
              </h3>
              <div className="flex flex-wrap items-center justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>$1000</span>
                <Link className="btn bg-orange-400 px-4 py-3 text-white hover:text-orange-400 hover:bg-gray-100">
                  View details
                </Link>
              </div>
            </div>
          </article>
          {/*  */}
        </div>
        <div className="flex items-center justify-center">
          <Link className="bg-orange-500 px-5 py-3 rounded-md hover:bg-gray-100 hover:text-orange-500 text-white">
            See all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
