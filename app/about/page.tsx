



import AboutContact from "@/components/AboutContact";
import AboutHero from "@/components/AboutHero";
import AboutProcess from "@/components/AboutProcess";
import AboutServices from "@/components/AboutServices";
import AboutStory from "@/components/AboutStory";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import { NextPage } from "next";






const index: NextPage = () => {
  return (
   <>
    <AboutHero />
    <AboutStory />
    <AboutServices />
    <AboutProcess />
    <WhyUs />
    <Team />
    <Testimonials />
    <AboutContact />
    
   </>
  );
}
export default index;