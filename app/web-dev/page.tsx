
import CustomCMS from "@/components/CustomCMS";
import DarkStatsSection from "@/components/DarkStatsSection";
import FAQSection from "@/components/FAQSection";
import HeroNew from "@/components/HeroNew";
import Industries from "@/components/Industries";
import OurApproach from "@/components/OurApproach";
import SEOHero from "@/components/SeoHero";
import SEOServices from "@/components/SeoServices";
import StatsBar from "@/components/StatsBar";
import wevdevhero from "../../public/data/wevdevhero.json"
import { NextPage } from "next";






const index: NextPage = () => {
  return (
   <>
   
   <HeroNew data={wevdevhero} />
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