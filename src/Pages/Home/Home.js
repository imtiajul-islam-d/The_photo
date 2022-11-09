import React from "react";
import Banner from "./Banner/Banner";
import QuickHeading from "./QuickHeader/QuickHeading";
import ServiceOverview from "./ServiceOverview/ServiceOverview";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <section className="min-[50vh] flex items-center justify-center mt-4 backdrop-blur-lg bg-white/30">
        <QuickHeading></QuickHeading>
      </section>
      <section className="min-h-screen flex justify-center items-center">
        <ServiceOverview></ServiceOverview>
      </section>
    </section>
  );
};

export default Home;
