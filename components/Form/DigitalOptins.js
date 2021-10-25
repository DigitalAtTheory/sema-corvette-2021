export default function DigitalOptins({
  privacyPolicy,
  manufacturer,
  semaBuilds,
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
              id="semaBuilds"
              name="semaBuilds"
              type="checkbox"
              checked={semaBuilds}
              onChange={(e) => handleOptin(e)}
              className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="hoonigan" className="text-gray-50 font-light">
              {`I'd like to stay updated with the details around all of this year's Mobil 1 SEMA builds.`}
            </label>
          </div>
        </div>
        {/* End Third Optin */}
      </fieldset>
    </div>
  );
}
