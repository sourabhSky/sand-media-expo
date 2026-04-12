


import CTABand from "@/components/CTABand";
import AboutHero from "@/components/AboutHero";
import PhotoServices from "@/components/PhotoServices";
import { NextPage } from "next";
import Gallery from "@/components/Gallery";
import AboutProcess from "@/components/AboutProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AboutContact from "@/components/AboutContact";






const index: NextPage = () => {
  return (
   <>
   <AboutHero />
   <PhotoServices/>
    <Gallery />
    <AboutProcess/>
    <WhyChooseUs/>
    <Testimonials/>
    <CTABand/>
    <AboutContact/>
   </>
  );
}
export default index;