import React from "react";

const QuickHeading = () => {
  return (
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around">
          <div>
            <h2 className="text-center lg:text-start text-6xl tracking-tighter font-bold">
              WE JUST LOVE TO CAPTURE PEOPLE IN LOVE.
            </h2>
          </div>
          <div className="lg:text-start py-2 mt-3 lg:py-0 text-xl text-justify">
            Looking for a wedding photographer? We approach weddings in a
            documentary and artistic way, trying to tell the story of your day
            honestly and unobtrusively. Our images are warm, romantic, and
            intimate. We hope to give you images that make you feel, not just
            see.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickHeading;
