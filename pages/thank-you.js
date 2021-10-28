import Head from "next/head";
import Footer from "../components/Footer";
import Lockup from "../components/Lockup";
import ThankYouContent from "../components/ThankYouContent";
import Image from "next/image";
import WallpaperDownload from "../components/WallpaperDownload";

export default function ThankYouPage() {
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
        <ThankYouContent />
        <WallpaperDownload wallpaperLink="/wallpapers" />
      </div>
      <Footer />
    </div>
  );
}
