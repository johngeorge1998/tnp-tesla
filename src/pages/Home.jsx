import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Navbar from "../components/Navbar";
import { useEffect, useState, useRef } from "react";
import Footer from "../components/features/Footer";

const Home = () => {
  const featureSectionRef = useRef(null);
  const [state, setState] = useState({
    index: 0,
    carData: null,
    opened: false,
  });

  useEffect(() => {
    fetch("http://localhost:5000/carModels")
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          index: 0,
          carData: data,
        }));
      });
  }, []);

  const scrollToFeatureSection = () => {
    if (featureSectionRef.current) {
      featureSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar setState={setState} />

      <HeroSection
        state={state}
        setState={setState}
        scrollToFeatureSection={scrollToFeatureSection}
      />
      <div ref={featureSectionRef}>
        <FeatureSection state={state} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
