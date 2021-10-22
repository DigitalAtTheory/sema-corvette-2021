import Image from "next/image";
export default function Footer() {
  return (
    <footer className="flex align-bottom">
      <Image
        src="/footer-light-leak.png"
        width="3634px"
        height="278px"
        alt=""
        priority
      />
    </footer>
  );
}
