export default function OptIn({
  privacyPolicy,
  manufacturer,
  hoonigan,
  luftgekühlt,
  raceService,
  handleOptin,
}) {
  return (
    <div>
      <fieldset className="space-y-5 pt-2 text-left">
        <legend className="sr-only">Email Opt-ins</legend>
        {/* First Optin */}
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacyPolicy"
              name="privacyPolicy"
              type="checkbox"
              checked={privacyPolicy}
              onChange={(e) => handleOptin(e)}
              className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacyPolicy" className="text-gray-50 font-light">
              I want to subscribe to get future offers and news from ExxonMobil,
              and I agree for my submitted information to be used in accordance
              with the{" "}
              <a
                className="underline text-reflex-600"
                href="https://corporate.exxonmobil.com/Global-legal-pages/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                ExxonMobil privacy policy.
              </a>
            </label>
          </div>
        </div>
        {/* End First Optin */}
        {/* Second Optin */}
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="manufacturer"
              name="manufacturer"
              type="checkbox"
              checked={manufacturer}
              onChange={(e) => handleOptin(e)}
              className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="manufacturer" className="text-gray-50 font-light">
              {`I’d like to receive future special offers and promotions from the
              manufacturer of my vehicle (General Motors, Porsche Cars North
              America, Toyota Motor North America, etc.)`}
            </label>
          </div>
        </div>
        {/* End Second Optin */}
        {/* Third Optin */}
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="hoonigan"
              name="hoonigan"
              type="checkbox"
              checked={hoonigan}
              onChange={(e) => handleOptin(e)}
              className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="hoonigan" className="text-gray-50 font-light">
              {`I'd like to stay updated with the details around the Hoonigan x Mobil 1 Corvette build.`}
            </label>
          </div>
        </div>
        {/* End Third Optin */}
        {/* Fourth Optin */}
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="luftgekühlt"
              name="luftgekühlt"
              type="checkbox"
              checked={luftgekühlt}
              onChange={(e) => handleOptin(e)}
              className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="luftgekühlt" className="text-gray-50 font-light">
              {`I'd like to stay updated with the details around the Luftgekühlt x Mobil 1 build`}
            </label>
          </div>
        </div>
        {/* End Fourth Optin */}
        {/* Fifth Optin */}
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="raceService"
              name="raceService"
              type="checkbox"
              checked={raceService}
              onChange={(e) => handleOptin(e)}
              className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="raceService" className="text-gray-50 font-light">
              {`I'd like to stay updated with the details around the Ryan Tuerck x Mobil 1 build`}
            </label>
          </div>
        </div>
        {/* End Fifth Optin */}
      </fieldset>
    </div>
  );
}
