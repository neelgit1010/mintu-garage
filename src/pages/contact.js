import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import EnquirySection from "../components/home/EnquirySection";
import ContactPageSection from "../components/contact/ContactPageSection";
export default function Contact() {
    return (
        <MainTemplate>
            <Banner />
            <EnquirySection />
            <ContactPageSection />
        </MainTemplate>
    );
}