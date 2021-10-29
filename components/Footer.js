import Image from "next/image";
import footerLight from "../public/footer-light-leak.png";
export default function Footer() {
  return (
    <footer className="flex align-bottom">
      <Image src={footerLight} placeholder="blur" alt="" priority />
    </footer>
  );
}
