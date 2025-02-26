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
    <MainTemplate>
      <VideoComponent />
      <CounterSection />
      <EnquirySection />
      <AboutSection />
      <ServiceSection />
      <BookAppointmentSection />
      <PreviousworkSection />
    </MainTemplate>
  );
}
