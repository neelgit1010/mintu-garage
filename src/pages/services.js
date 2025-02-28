import Head from "next/head";

import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import ServicePageSection from "../components/services/ServicePageSection";
export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Mintu Garage</title>
        <meta
          name="description"
          content="At Mintu Garage, we prioritize customer satisfaction, ensuring that every vehicle receives expert care and attention. Our dedication to excellence, combined with our extensive industry experience, has earned us the trust and loyalty of countless customers across Siliguri."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta property="og:title" content="Services - Mintu Garage" />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <ServicePageSection />
      </MainTemplate>
    </>
  );
}
