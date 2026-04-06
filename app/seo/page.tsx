

import DarkStatsSection from "@/components/DarkStatsSection";
import FAQSection from "@/components/FAQSection";

import Industries from "@/components/Industries";
import OurApproach from "@/components/OurApproach";
import SEOHero from "@/components/SeoHero";
import SEOServiceHorizontal from "@/components/SEOServiceHorizontal";
import SEOServiceNav from "@/components/SeoServiceNav";
import SEOServices from "@/components/SeoServices";


import { NextPage } from "next";






const index: NextPage = () => {
  return (
   <>
   <SEOHero />
   <SEOServices />
   <OurApproach />
   <Industries />

   <SEOServiceHorizontal />
   <SEOServiceNav />
   <DarkStatsSection />
   
   <FAQSection />
   </>
  );
}
export default index;