import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

// for navigation structure
import { useEffect, useState } from "react";
import Header from "../Pages/Shared/Header/Header";
const Main = () => {
  // scroll effect start
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;
  const controlNavbar = () => {
    if (lastScrollY < window.scrollY) {
      if (window.scrollY > 100) {
        setShow(false);
      }
    } else {
      setShow(true);
    }
    lastScrollY = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  // scroll effect end
  return (
    <section>
      {/* Navigation start */}
      <section className={`${show? "fixed top-0 w-full h-20 border-b-[1px] bg-yellow-500": "hidden"}`}>
        <Header></Header>
      </section>
      {/* Navigation end */}
      {/* Body section start */}
      <section className="min-h-screen pt-20 container mx-auto">
        <Outlet></Outlet>
      </section>
      {/* Body section end */}
      {/* Footer section start */}
      <Footer></Footer>
      {/* Footer section end */}
    </section>
  );
};

export default Main;
