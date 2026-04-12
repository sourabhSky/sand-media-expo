


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






const index: NextPage = () => {
  return (
   <>
   <HeroSocial/>
   <SocialServices/>
   <MeasuredResults/>
   <SocialMediaProcess/>
   <SocialMediaConsultancy/>
   <PaidVsOrganic/>
   <ToolsAndSoftware/>
   <FAQSection/>
   <ContactCTA/>
   </>
  );
}
export default index;