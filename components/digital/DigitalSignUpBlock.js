import { Link } from "react-scroll";

export default function DigitalSignUpBlock() {
  return (
    <div className="text-center">
      <p className="text-white text-lg px-6 pt-6 font-light">
        {`For all those who couldn't be here at the SEMA Show, we're bringing the show to you. If you liked the video that brought you here, fill out the survey below to get on our list for the next in the series of Scotto's Corvette Stingray.`}
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
