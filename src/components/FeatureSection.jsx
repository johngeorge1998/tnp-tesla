import Pricing from "./features/Pricing";
import VideoInterior from "./features/VideoInterior";
import Specs from "./features/Specs";
import Performance from "./features/Performance";
import { useEffect, useState } from "react";

const FeatureSection = ({ state }) => {
  const [pricing, setPricing] = useState(null);
  const [interior, setInterior] = useState(null);
  const [spec, setSpec] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    if (state.carData && state.carData.length > 0) {
      const priceData = {
        modalName: state.carData[state.index]?.modalName,
        modalImage: state.carData[state.index]?.modalImage,
        price: state.carData[state.index]?.price,
        discount: state.carData[state.index]?.discount,
        specifications: state.carData[state.index]?.specifications,
      };

      const interiorVideo = {
        bannerVideo: state.carData[state.index]?.modelVideo,
        bannerText: state.carData[state.index]?.modelVideoDesc,
      };

      const specificDescData = state.carData[state.index]?.specificDesc;
      const chaseData = state.carData[state.index]?.chase;
      setPerformance(chaseData);
      setSpec(specificDescData);
      setInterior(interiorVideo);
      setPricing(priceData);
    }
  }, [state.carData, state.index]);

  return (
    <>
      <Pricing pricingData={pricing} />

      <VideoInterior videoData={interior} />

      <Specs specData={spec} />

      <Performance performanceData={performance} />
    </>
  );
};

export default FeatureSection;
