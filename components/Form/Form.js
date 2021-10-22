import FirstQuestion from "./FirstQuestion";
import Gender from "./Gender";
import Info from "./Info";
import OptIn from "./OptIn";
import SecondQuestion from "./SecondQuestion";

export default function Form() {
  return (
    <div className="px-4 text-center">
      <h2 className="text-white text-2xl text-center">Sign up, stay tuned</h2>
      <Gender />
      <Info />
      <OptIn />
      <FirstQuestion />
      <SecondQuestion />
      <button className="bg-reflex-600 text-white w-3/4 lg:w-1/2 mx-auto my-10 py-3 rounded shadow-xl">
        Count me in
      </button>
    </div>
  );
}
