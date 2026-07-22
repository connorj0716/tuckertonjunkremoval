import CallCta from "@/components/CallCta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import StickyCta from "@/components/StickyCta";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <ServiceArea />
        <Faq />
        <CallCta />
      </main>
      <Footer />
      <StickyCta />
      <div className="h-[76px] bg-navy-950 sm:hidden" aria-hidden="true" />
    </>
  );
}
