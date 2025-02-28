import Head from "next/head";

import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import EnquirySection from "../components/home/EnquirySection";
import ContactPageSection from "../components/contact/ContactPageSection";
export default function Contact() {
    return (
      <>
        <Head>
          <title>Contact Us - Mintu Garage</title>
          <meta
            name="description"
            content="imply provide your details, and we’ll get back to you with expert advice and solutions. We value your time and ensure quick responses to all inquiries. Stay stress-free and let us handle your car needs - reach out today for hassle-free assistance!"
          />
          <meta name="keywords" content="about, company, values, team" />
          <meta property="og:title" content="Contact Us - Mintu Garage" />
          <meta
            property="og:description"
            content="Learn more about our company and values."
          />
        </Head>

        <MainTemplate>
          <Banner />
          <EnquirySection />
          <ContactPageSection />
        </MainTemplate>
      </>
    );
}