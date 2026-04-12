

import AboutSplitSection from "@/components/AboutSplitSection";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroNew";

import OurApproach from "@/components/OurApproach";

import StatsBar from "@/components/StatsBar";

import { NextPage } from "next";






const index: NextPage = () => {
  return (
   <>
   
   <HeroSection />
   <StatsBar/>
   <OurApproach />
   <AboutSplitSection/>
   <AdvancedFeatures/>
   <FAQSection />
   </>
  );
}
export default index;