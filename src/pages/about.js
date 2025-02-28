import Head from "next/head";

import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import CounterSection from "../components/home/CounterSection";
import AboutSection from "../components/home/AboutSection";
import EnquirySection from "../components/home/EnquirySection";
export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Mintu Garage</title>
        <meta
          name="description"
          content="With over 15 years of experience, we are committed to delivering reliable and high-quality automotive solutions to keep your vehicle running smoothly."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta property="og:title" content="About Us - Mintu Garage" />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>

      <MainTemplate>
        <Banner />
        <CounterSection />
        <AboutSection />
        <EnquirySection />
      </MainTemplate>
    </>
  );
}
