import Head from "next/head";
import Footer from "../components/Footer";
import Lockup from "../components/Lockup";
import ThankYouContent from "../components/ThankYouContent";
import Image from "next/image";
import WallpaperDownload from "../components/WallpaperDownload";
import topLight from "../public/top-light-leak.png";

export default function ThankYouPage() {
  return (
    <div>
      <Head>
        <title>Thank You - Unconventionally Driven</title>
      </Head>
      <Lockup />
      <Image src={topLight} placeholder="blur" priority loading="eager" />
      <div className="max-w-3xl mx-auto">
        <ThankYouContent />
        <WallpaperDownload wallpaperLink="/wallpapers" />
      </div>
      <Footer />
    </div>
  );
}
