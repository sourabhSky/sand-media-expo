


import CTABand from "@/components/CTABand";

import { NextPage } from "next";


import AboutContact from "@/components/AboutContact";

import FAQSection from "@/components/FAQSection";
import AboutProcess from "@/components/AboutProcess";
import Pricing from "@/components/Pricing";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import ResultsSlider from "@/components/ResultsSlider";
import PerformanceServices from "@/components/PerformanceServices";
import PpcHero from "@/components/PpcHero";






const index: NextPage = () => {
  return (
   <>
   <PpcHero/>
   <PerformanceServices/>
   <ResultsSlider/>
    <AboutProcess/>
    <AdvancedFeatures/>
    <Pricing/>
     <FAQSection/>
     <AboutContact/>
    <CTABand/>
    
   </>
  );
}
export default index;