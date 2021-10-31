import Head from "next/head";
import DigitalHeroContent from "../../components/digital/DigitalHeroContent";
import DigitalSignUpBlock from "../../components/digital/DigitalSignUpBlock";
import Lockup from "../../components/Lockup";
import ProductBlock from "../../components/ProductBlock";
import VideoBackground from "../../components/VideoBackground";
import DigitalForm from "../../components/Form/DigitalForm";
import Footer from "../../components/Footer";
import BuildContent from "../../components/BuildContent";

export default function DigitalPage() {
  return (
    <>
      <Head>
        <title>Corvette - Unconventionally Driven</title>
      </Head>
      <VideoBackground videoPath="/Vette-Hoonigan_1.mp4">
        <Lockup />
        <DigitalHeroContent />
      </VideoBackground>
      <div className="max-w-4xl mx-auto md:px-12 lg:px-24">
        <DigitalSignUpBlock />
        <ProductBlock />
        <BuildContent />
        <DigitalForm />
      </div>
      <Footer />
    </>
  );
}
