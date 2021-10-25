import Image from "next/image";

export default function DigitalThankYou() {
  return (
    <div className="text-white text-center px-4 font-light mt-6">
      <Image
        src="/corvette-confirmation-headline.png"
        width="1170px"
        height="365px"
        priority
      />
      <p className="my-6">
        Even though we missed you in-person, we wanted to leave you with a
        little something to feel like you were here with us. Snag the SEMA
        Show-exclusive wallpaper below, and check out some of the other content
        around this build below.
      </p>
      <p>
        Thanks for being unconventional, and stay tuned for more exclusive
        content from us and our partners like Hoonigan in the near future.
      </p>
    </div>
  );
}
