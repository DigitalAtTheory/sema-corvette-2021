import { Link } from "react-scroll";

export default function SignUpBlock() {
  return (
    <div className="text-center">
      <p className="text-white text-lg px-6 pt-6 font-light">
        {`Starting here at SEMA, a limited few are invited to be the first to go
        behind-the-scenes of exclusive Mobil 1 builds like Scotto's Corvette
        Stingray.`}
      </p>
      <Link
        to="reflexForm"
        smooth={true}
        className="bg-reflex-600 text-white w-3/4 lg:w-1/2 mx-auto mt-10 py-3 rounded shadow-xl block cursor-pointer"
      >
        Sign Up
      </Link>
    </div>
  );
}
