import Head from "next/head";
import Lockup from "../../components/Lockup";
import Image from "next/image";
import Footer from "../../components/Footer";
import WallpaperDownload from "../../components/WallpaperDownload";
import VideoLinks from "../../components/VideoLinks";
import DigitalThankYou from "../../components/digital/DigitalThankYou";

export default function DigitalThankYouPage() {
  return (
    <div>
      <Head>
        <title>Thank You - Unconventionally Driven</title>
      </Head>
      <Lockup />
      <Image
        src="/top-light-leak.png"
        width="3634px"
        height="278px"
        priority
        loading="eager"
      />
      <div className="max-w-3xl mx-auto">
        <DigitalThankYou />
        <WallpaperDownload wallpaperLink="/digital/wallpapers" />
        <VideoLinks />
      </div>
      <Footer />
    </div>
  );
}
