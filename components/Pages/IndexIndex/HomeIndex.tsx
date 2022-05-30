import React from "react";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import CandidateSection from "./CandidateSection/CandidateSection";
import ClientsReview from "./ClientSection/ClientsReview";
import CompanyCountSection from "./CompanyCountSection/CompanyCountSection";
import FaqSection from "./FaqSection/FaqSection";
import HeroSection from "./HeroSection/HeroSection";
import ResumeSection from "./ResumeSection/ResumeSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import SponsorsSection from "./SponsorsSection/SponsorsSection";
import SubScribeSection from "./SubscribeSection/SubScribeSection";
import TrendingSection from "./TrendindSection/TrendingSection";

function HomeIndex() {
  return (
    <div>
      <HeroSection />
      <SponsorsSection/>
      <AboutUsSection />
      <ServiceSection />
      <TrendingSection />
      <ResumeSection />
      <ClientsReview/>
      <SubScribeSection />
      <CandidateSection />
      <CompanyCountSection />
      <FaqSection />
    </div>
  );
}

export default HomeIndex;
