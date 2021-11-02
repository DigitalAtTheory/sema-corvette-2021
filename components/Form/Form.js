import { useState } from "react";
import FirstQuestion from "./FirstQuestion";
import Gender from "./Gender";
import Info from "./Info";
import OptIn from "./OptIn";
import SecondQuestion from "./SecondQuestion";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "../Loader";

export default function Form() {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [manufacturer, setManufacturer] = useState(false);
  const [hoonigan, setHoonigan] = useState(false);
  const [luftgekühlt, setLuftgekühlt] = useState(false);
  const [raceService, setRaceService] = useState(false);
  const [firstAnswer, setFirstAnswer] = useState(null);
  const [secondAnswer, setSecondAnswer] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Count me in");

  const router = useRouter();

  const handleInput = (e) => {
    switch (e.target.id) {
      case "age":
        setAge(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "zipCode":
        setZipCode(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleChooseRadial = (e, localFunction, id) => {
    switch (id) {
      case "gender":
        setGender(e);
        break;
      case "oilChange":
        setFirstAnswer(e);
        break;
      case "personalCar":
        setSecondAnswer(e);
        break;
      default:
        break;
    }
    localFunction(e);
  };

  const handleOptin = (e) => {
    switch (e.target.id) {
      case "privacyPolicy":
        privacyPolicy ? setPrivacyPolicy(false) : setPrivacyPolicy(true);
        break;
      case "manufacturer":
        manufacturer ? setManufacturer(false) : setManufacturer(true);
        break;
      case "hoonigan":
        hoonigan ? setHoonigan(false) : setHoonigan(true);
        break;
      case "luftgekühlt":
        luftgekühlt ? setLuftgekühlt(false) : setLuftgekühlt(true);
        break;
      case "raceService":
        raceService ? setRaceService(false) : setRaceService(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      entry_id: uuidv4(),
      gender,
      age,
      email,
      zip_code: zipCode,
      privacy_policy: privacyPolicy,
      manufacturer,
      hoonigan,
      luftgekühlt,
      race_service: raceService,
      oil_change: firstAnswer,
      personal_car: secondAnswer,
    };

    if (!formData.gender) {
      setError(true);
      setErrorMessage("Please choose a gender option.");
      setLoading(false);
    } else if (!formData.age) {
      setError(true);
      setErrorMessage("Please enter your age.");
      setLoading(false);
    } else if (!formData.email) {
      setError(true);
      setErrorMessage("Please enter your email.");
      setLoading(false);
    } else if (!formData.zip_code) {
      setError(true);
      setErrorMessage("Please enter your zip code.");
      setLoading(false);
    } else if (!formData.oil_change) {
      setError(true);
      setErrorMessage("Please tell use how you change your oil.");
      setLoading(false);
    } else if (!formData.personal_car) {
      setError(true);
      setErrorMessage("Please tell us the make of your primary car.");
      setLoading(false);
    } else {
      if (error) setError(false);

      await axios
        .post("/api/physical", formData)
        .then((res) => {
          setButtonText("Thank You!");
          setLoading(false);
          router.push("/thank-you");
        })
        .catch((err) => {
          console.error(err.message);
          setError(true);
          setErrorMessage(
            "Something went wrong. Try again. Make sure you are using an actual email."
          );
          setLoading(false);
        });
    }

    console.log(formData);
  };

  return (
    <div id="reflexForm" className="px-4 text-center">
      <h2 className="text-white text-2xl text-center mb-4">
        Sign up, stay tuned
      </h2>
      <Info
        age={age}
        email={email}
        zipCode={zipCode}
        handleInput={handleInput}
      />
      <Gender handleChooseRadial={handleChooseRadial} />
      <FirstQuestion handleChooseRadial={handleChooseRadial} />
      <SecondQuestion handleChooseRadial={handleChooseRadial} />
      <OptIn
        privacyPolicy={privacyPolicy}
        manufacturer={manufacturer}
        hoonigan={hoonigan}
        luftgekühlt={luftgekühlt}
        raceService={raceService}
        handleOptin={handleOptin}
      />
      <button
        onClick={handleSubmit}
        className="bg-reflex-600 text-white w-3/4 lg:w-1/2 mx-auto my-10 py-3 rounded shadow-xl"
      >
        {loading && <Loader />}
        {!loading && buttonText}
      </button>
      {error && (
        <div className="text-reflex-400">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
