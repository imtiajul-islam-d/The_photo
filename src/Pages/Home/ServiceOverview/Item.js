import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Item = ({itemData}) => {
    const {event, image} = itemData;
  return (
    <article className="flex flex-col dark:bg-gray-900 border">
      {/*  */}
      <PhotoProvider>
        <PhotoView src={image}>
          <img className="w-full" src={image} alt="" />
        </PhotoView>
      </PhotoProvider>
      {/*  */}

      <div className="flex flex-col flex-1 p-6">
        <span className="text-xl font-bold text-orange-600 tracking-wider uppercase dark:text-violet-400">
          {event}
        </span>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">
          this is short description this is short description this is short
          description this is short description this is short description this
          is short description
        </h3>
        <div className="flex flex-wrap items-center justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
          <span>$1000</span>
          <Link className="btn bg-orange-400 px-4 py-3 text-white hover:text-orange-400 hover:bg-gray-100">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item;
