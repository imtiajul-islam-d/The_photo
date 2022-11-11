import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import QuickHeading from "./QuickHeader/QuickHeading";
import ServiceOverview from "./ServiceOverview/ServiceOverview";

const Home = () => {
  useTitle('The photo || Home')
  return (
    <section>
      <Banner></Banner>
      <section className="min-[50vh] flex items-center justify-center mt-4  bg-orange-50">
        <QuickHeading></QuickHeading>
      </section>
      <section className="min-h-screen flex justify-center items-center">
        <ServiceOverview></ServiceOverview>
      </section>
      <section>
        <Gallery></Gallery>
      </section>
    </section>
  );
};

export default Home;
