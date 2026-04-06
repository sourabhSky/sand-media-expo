import AboutSplitSection from "@/components/AboutSplitSection";
import Blog from "@/components/Blog";
import DarkStatsSection from "@/components/DarkStatsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Locations from "@/components/Locations";
import MediaCoverage from "@/components/MediaCoverage";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
 
       <Hero />
        {/* <DarkStatsSection /> */}
        <AboutSplitSection />
       <Services />
       <MediaCoverage />
       <Industries />
       <Blog />
       <Locations />
      
     
      
    </>
  );
}
