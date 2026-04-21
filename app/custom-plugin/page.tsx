

import AboutSplitSection from "@/components/AboutSplitSection";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import FAQSection from "@/components/FAQSection";
import HeroNew from "@/components/HeroNew";
import heroNewData from "../../public/data/heroNewData.json"
import OurApproach from "@/components/OurApproach";
import StatsBar from "@/components/StatsBar";
import advancedFeaturesData from "../../public/data/advancedFeatures.json"
import { NextPage } from "next";
import AboutContact from "@/components/AboutContact";





const index: NextPage = () => {
  return (
   <>
   
   <HeroNew data={heroNewData} />
   {/* <StatsBar/> */}
   <OurApproach />
   <AboutSplitSection/>
   <AdvancedFeatures data={advancedFeaturesData} />
   <FAQSection />
     <AboutContact />
   </>
  );
}
export default index;