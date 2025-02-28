import Head from "next/head";

import MainTemplate from "@/components/templates/MainTemplate";
import VideoComponent from "../components/home/VideoComponent";
import CounterSection from "../components/home/CounterSection";
import EnquirySection from "../components/home/EnquirySection";
import AboutSection from "../components/home/AboutSection";
import ServiceSection from "../components/home/ServiceSection";
import BookAppointmentSection from "../components/home/BookAppointmentSection";
import PreviousworkSection from "../components/home/PreviousworkSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Mintu Garage</title>
        <meta
          name="description"
          content="Welcome to Mintu Garage, one of the oldest and most trusted car repair service providers in Siliguri."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta property="og:title" content="Home  - Mintu Garage" />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>

      <MainTemplate>
        <VideoComponent />
        <CounterSection />
        <EnquirySection />
        <AboutSection />
        <ServiceSection />
        <BookAppointmentSection />
        <PreviousworkSection />
      </MainTemplate>
    </>
  );
}
