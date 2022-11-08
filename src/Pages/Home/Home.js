import React from "react";
import Banner from "./Banner/Banner";
import ServiceOverview from "./ServiceOverview/ServiceOverview";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <section className="min-h-screen flex justify-center items-center">
        <ServiceOverview></ServiceOverview>
      </section>
    </section>
  );
};

export default Home;
