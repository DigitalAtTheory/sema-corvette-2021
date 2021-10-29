import Image from "next/image";
import bottle from "../public/bottle-corvette.png";

export default function ProductBlock() {
  return (
    <div>
      <hr className="text-white my-16 w-1/2 mx-auto" />
      <div className="text-center">
        <Image src={bottle} placeholder="blur" alt="Bottle of Mobil 1 oil" />
        <p className="text-white text-lg px-6 pt-6 font-light">
          Did you know that Mobil 1 ESP Formula 0W-40 is the first and only
          dexos-approved motor oil developed specifically for Corvette? The
          technology that helped produce every Corvette Racing win ends up in a
          motor oil that guarantees Corvette power and precision.
        </p>
      </div>
      <hr className="text-white my-16 w-1/2 mx-auto" />
    </div>
  );
}
