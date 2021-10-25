import { useState } from "react";
import Head from "next/head";
import HeroContent from "../components/HeroContent";
import Lockup from "../components/Lockup";
import ProductBlock from "../components/ProductBlock";
import SignUpBlock from "../components/SignUpBlock";
import VideoBackground from "../components/VideoBackground";
import Footer from "../components/Footer";
import Form from "../components/Form/Form";
import PlayVideo from "../components/PlayVideo";

export default function Home() {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  const handleDonePlaying = () => {
    setPlayVideo(false);
  };

  return (
    <>
      <Head>
        <title>Corvette - Unconventionally Driven</title>
      </Head>
      {playVideo && <PlayVideo handleDonePlaying={handleDonePlaying} />}
      <VideoBackground>
        <Lockup />
        <HeroContent handlePlayVideo={handlePlayVideo} />
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
