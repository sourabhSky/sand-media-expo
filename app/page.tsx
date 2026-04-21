import AboutContact from "@/components/AboutContact";
import AboutSplitSection from "@/components/AboutSplitSection";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Locations from "@/components/Locations";
import MediaCoverage from "@/components/MediaCoverage";
import Services from "@/components/Services";
import heroData from "../public/data/heroData.json"

export default function Home() {
  return (
    <>
 
       <Hero data={heroData}  />
        {/* <DarkStatsSection /> */}
        <AboutSplitSection />
       <Services />
       {/* <MediaCoverage /> */}
       <Industries />
       <Blog />
       {/* <Locations /> */}
       <AboutContact />
     
      
    </>
  );
}
