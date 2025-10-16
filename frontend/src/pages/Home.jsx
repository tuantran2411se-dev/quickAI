import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AITools from "../components/AITools";
import Testimonial from "../components/Testimonial";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AITools />
      <Testimonial />
      <Plan />
    </div>
  );
};

export default Home;
