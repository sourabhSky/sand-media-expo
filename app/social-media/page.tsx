


import ContactCTA from "@/components/ContactCTA";
import FAQSection from "@/components/FAQSection";
import HeroSocial from "@/components/HeroSocial";
import MeasuredResults from "@/components/MeasuredResults";
import PaidVsOrganic from "@/components/PaidVsOrganic";
import SocialMediaConsultancy from "@/components/SocialMediaConsultancy";
import SocialMediaProcess from "@/components/SocialMediaProcess";
import SocialServices from "@/components/SocialServices";
import ToolsAndSoftware from "@/components/ToolsAndSoftware";
import { NextPage } from "next";
import heroSocialData from "../../public/data/heroSocialData.json"
import socialServicesData from "../../public/data/socialServicesData.json"
import AboutContact from "@/components/AboutContact";




const index: NextPage = () => {
  return (
   <>
   <HeroSocial data={heroSocialData}/>
   <SocialServices data={socialServicesData}/>
   <MeasuredResults/>
   <SocialMediaProcess/>
   <SocialMediaConsultancy/>
   <PaidVsOrganic/>
   <ToolsAndSoftware/>
   <FAQSection/>
   {/* <ContactCTA/> */}
   <AboutContact />
   </>
  );
}
export default index;