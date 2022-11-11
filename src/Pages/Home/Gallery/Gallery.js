import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Gallery = () => {
  const [image, setImage] = useState([]);
  // // fetch data for gallery
  useEffect(() => {
    const url = "https://personal-review-server.vercel.app/services";
    //   // fetching data
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const serviceData = data.data;
        setImage(serviceData);
      });
  }, []);
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div>
        <h2 className="text-center text-3xl text-bold text-orange-400 mb-2">
          Always full-day coverage!
        </h2>
      </div>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <PhotoProvider>
          {image.map((img) => {
            return (
              <PhotoView key={img._id} src={img.image}>
                <img className="w-full h-full" src={img.image} alt="" />
              </PhotoView>
            );
          })}
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Gallery;
