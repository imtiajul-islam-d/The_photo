import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import Item from "./Item";


const ServiceOverview = () => {
  const [service, setService] = useState([])
  // // fetch data to show the featured service
  useEffect(() => {
    const url = `http://localhost:5000/home/services?size=${3}`;
  //   // fetching data 
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const serviceData = data.data;
      setService(serviceData)
    })
  }, [])
  console.log(service)
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
            {
              service.map(item => <Item key={item._id} itemData = {item}></Item>)
            }
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
