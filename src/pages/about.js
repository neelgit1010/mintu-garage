import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import CounterSection from "../components/home/CounterSection";
import AboutSection from "../components/home/AboutSection";
import EnquirySection from "../components/home/EnquirySection";
export default function About() {
  return (
    <MainTemplate>
      <Banner />
      <CounterSection />
      <AboutSection />
      <EnquirySection />
    </MainTemplate>
  );
}
