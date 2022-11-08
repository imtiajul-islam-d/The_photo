import React from "react";
import { Link } from "react-router-dom";

const ServiceOverview = () => {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-orange-500">
            FEATURED SERVICES
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col dark:bg-gray-900 border">
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://source.unsplash.com/200x200/?fashion?1"
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                Convenire
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          {/*  */}
          <article className="flex flex-col dark:bg-gray-900 border">
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://source.unsplash.com/200x200/?fashion?1"
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                Convenire
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          {/*  */}
          <article className="flex flex-col dark:bg-gray-900 border">
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="https://source.unsplash.com/200x200/?fashion?1"
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                Convenire
              </span>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
        </div>
          <div className="flex items-center justify-center">
            <Link className="bg-orange-500 px-5 py-3 rounded-md hover:bg-gray-100 hover:text-orange-500 text-white">See all</Link>
          </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
