import logoimage from  "../../../assets/images/Logo.png"
import { Helmet } from "react-helmet";
import Banner from "../../sections/common/banner";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function AboutUsPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
    <Helmet>
        <title>About Devrolin - Software Development Company</title>
        <meta
          name="description"
          content="Learn about Devrolin, a leading software development company. Discover our mission, vision, team, and core values."
        />
        <meta
          name="keywords"
          content="about us, Devrolin, software development, mission, vision, team, core values"
        />
        <meta property="og:title" content="About Devrolin - Software Development Company" />
        <meta
          property="og:description"
          content="Learn about Devrolin, a leading software development company. Discover our mission, vision, team, and core values."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devrolin.com/about-us" /> {/* Adjust URL as per your routing */}
        <meta property="og:image" content={logoimage} /> {/* Example image URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Devrolin - Software Development Company" />
        <meta
          name="twitter:description"
          content="Learn about Devrolin, a leading software development company. Discover our mission, vision, team, and core values."
        />
        <meta name="twitter:image" content={logoimage} /> {/* Example image URL */}
      </Helmet>
      <Banner _data={bannerData.about} />
      <SectionAboutCompany1 />
      <SectionServices1 />
      <SectionVideo2 />
      <SectionWhyChooseUs4 />
      {/* <SectionClients2 /> */}
    </>
  );
}

export default AboutUsPage;
