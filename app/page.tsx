import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import StickyCta from "@/components/StickyCta";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ServiceArea />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <StickyCta />
      <div className="h-[76px] bg-navy-950 sm:hidden" aria-hidden="true" />
    </>
  );
}
