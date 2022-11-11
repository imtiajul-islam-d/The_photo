import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceView from "./ServiceView";

const Service = () => {
  const services = useLoaderData();
  
  useTitle("The Photo || Services")
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 container mx-auto">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-orange-400">ALL THE AVAILABLE SERVICE</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            We believe in quality
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {
            services? 
            <>
              {
                services.data.map(item => <ServiceView key={item._id} data={item}></ServiceView>)
              }
            </>
            :
            <></>
          }
        </div>
      </div>
    </section>
  );
};

export default Service;
