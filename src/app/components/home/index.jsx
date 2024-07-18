import logoimage from  "../../../assets/images/Logo.png"
import { Helmet } from "react-helmet";
import SectionSlider1 from "../../sections/home/index/section-slider1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionWhyChooseUs1 from "../../sections/home/index/section-why-choose-us1";
import SectionVideo1 from "../../sections/home/index/section-video1";
import SectionPricing1 from "../../sections/home/index/section-pricing1";
import SectionClients1 from "../../sections/home/index/section-clients1";
import SectionCaseStudy1 from "../../sections/home/index/section-case-study1";
import SectionBlogs1 from "../../sections/home/index/section-blogs1";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Home1Page() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <Helmet>
        <title>DevRolin - Leading Software Development Company</title>
        <meta name="description" content="Devrolin provides top-notch software development, website creation, data science solutions, business development, and AI services. Contact us for innovative and reliable solutions." />
        <meta name="keywords" content="software development, website creation, data science, business development, AI services, Devrolin, Devrolin dubai,devrolin company, devrolin software Company  , Devrolin services ,devrolin solution " />
        <meta property="og:title" content="Devrolin - Leading Software Development Company" />
        <meta property="og:description" content="Devrolin provides top-notch software development , website creation, data science solutions, business development, and AI services. Contact us for innovative and reliable solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devrolin.com" />
        <meta property="og:image" content={logoimage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Devrolin - Leading Software Development Company" />
        <meta name="twitter:description" content="Devrolin provides top-notch software development, website creation, data science solutions, business development, and AI services. Contact us for innovative and reliable solutions." />
        <meta name="twitter:image" content={logoimage} />
      </Helmet>
      <SectionSlider1 />
      <SectionServices1 />
      <SectionAboutCompany1 />
      <SectionWhyChooseUs1 />
      <SectionVideo1 />
      {/* <SectionClients1 /> */}
      {/* <SectionCaseStudy1 /> */}
      {/* <SectionBlogs1 /> */}
    </>
  );
}

export default Home1Page;
