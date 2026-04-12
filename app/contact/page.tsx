


import CTABand from "@/components/CTABand";

import { NextPage } from "next";


import AboutContact from "@/components/AboutContact";
import ContactHero from "@/components/ContactHero";
import ContactInfoCards from "@/components/ContactInfoCards";
import MapLocation from "@/components/MapLocation";
import FAQSection from "@/components/FAQSection";






const index: NextPage = () => {
  return (
   <>
    <ContactHero/>
     <ContactInfoCards/>
     <AboutContact/>
     <MapLocation/>
     <FAQSection/>
    <CTABand/>
    
   </>
  );
}
export default index;