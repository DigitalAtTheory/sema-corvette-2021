import HeroContent from "../components/HeroContent";
import Lockup from "../components/Lockup";
import ProductBlock from "../components/ProductBlock";
import SignUpBlock from "../components/SignUpBlock";
import VideoBackground from "../components/VideoBackground";
import Footer from "../components/Footer";
import Form from "../components/Form/Form";

export default function Home() {
  return (
    <>
      <VideoBackground>
        <Lockup />
        <HeroContent />
      </VideoBackground>
      <div className="max-w-4xl mx-auto md:px-12 lg:px-24">
        <SignUpBlock />
        <ProductBlock />
        <Form />
      </div>
      <Footer />
    </>
  );
}
