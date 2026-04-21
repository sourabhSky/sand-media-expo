


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
import advancedFeaturesData from "../../public/data/advancedFeatures.json"

import caseStudiesData from "../../public/data/caseStudies.json"



const index: NextPage = () => {
  return (
   <>
   <PpcHero/>
   <PerformanceServices/>
   <ResultsSlider data={caseStudiesData} />
    <AboutProcess/>
    <AdvancedFeatures data={advancedFeaturesData} />
    {/* <Pricing/> */}
     <FAQSection/>
     <AboutContact/>
    <CTABand/>
    
   </>
  );
}
export default index;