
import CustomCMS from "@/components/CustomCMS";
import DarkStatsSection from "@/components/DarkStatsSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroNew";
import Industries from "@/components/Industries";
import OurApproach from "@/components/OurApproach";
import SEOHero from "@/components/SeoHero";
import SEOServices from "@/components/SeoServices";
import StatsBar from "@/components/StatsBar";

import { NextPage } from "next";






const index: NextPage = () => {
  return (
   <>
   
   <HeroSection />
   <StatsBar/>
   <OurApproach />
   <CustomCMS />
   <DarkStatsSection />
   <Industries />
   <FAQSection />
   </>
  );
}
export default index;