



import { NextPage } from "next";

import CaseStudiesHero from "@/components/CaseStudiesHero";
import CaseStudiesProcess from "@/components/CaseStudiesProcess";
import CaseStudiesTestimonials from "@/components/CaseStudiesTestimonials";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import CaseStudiesCTA from "@/components/CaseStudiesCTA";








const index: NextPage = () => {
    return (
        <>
            <CaseStudiesHero />
            <CaseStudiesProcess />
            <CaseStudiesTestimonials />
            <CaseStudiesGrid />
            <CaseStudiesCTA />


        </>
    );
}
export default index;