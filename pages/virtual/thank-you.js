import Head from "next/head";
import Lockup from "../../components/Lockup";
import Image from "next/image";
import Footer from "../../components/Footer";
import WallpaperDownload from "../../components/WallpaperDownload";
import DigitalThankYou from "../../components/digital/DigitalThankYou";
import topLight from "../../public/top-light-leak.png";
import BuildContent from "../../components/BuildContent";

export default function DigitalThankYouPage() {
  return (
    <div>
      <Head>
        <title>Thank You - Unconventionally Driven</title>
      </Head>
      <Lockup />
      <Image src={topLight} placeholder="blur" priority loading="eager" />
      <div className="max-w-3xl mx-auto">
        <DigitalThankYou />
        <WallpaperDownload wallpaperLink="/digital/wallpapers" />
        <BuildContent />
      </div>
      <Footer />
    </div>
  );
}
