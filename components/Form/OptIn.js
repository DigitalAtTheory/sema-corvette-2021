const optins = [
  {
    id: "privacyPolicy",
    text: "I want to subscribe to get future offers and news from ExxonMobil, and I agree for my submitted information to be used in accordance with the",
    linkText: "ExxonMobil privacy policy.",
    link: "https://corporate.exxonmobil.com/Global-legal-pages/privacy-policy",
  },
  {
    id: "manufacturer",
    text: "I’d like to receive future special offers and promotions from the manufacturer of my vehicle (General Motors, Porsche Cars North America, Toyota Motor North America, etc.)",
    linkText: null,
    link: null,
  },
  {
    id: "hoonigan",
    text: "I'd like to stay updated with the details around the custom Hoonigan build",
    linkText: null,
    link: null,
  },
  {
    id: "luftgekühlt",
    text: "I'd like to stay updated with the details around the custom Luftgekühlt build",
    linkText: null,
    link: null,
  },
  {
    id: "raceService",
    text: "I'd like to stay updated with the details around the custom Race Service build",
    linkText: null,
    link: null,
  },
];

export default function OptIn() {
  return (
    <div>
      <fieldset className="space-y-5 pt-2">
        <legend className="sr-only">Email Opt-ins</legend>
        {optins.map((optin) => (
          <div key={optin} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id={optin.id}
                name={optin.id}
                type="checkbox"
                className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="text-gray-50 font-light">
                {optin.link && (
                  <>
                    {optin.text}{" "}
                    <a className="underline text-reflex-600" href={optin.link}>
                      {optin.linkText}
                    </a>
                  </>
                )}
                {!optin.link && <>{optin.text}</>}
              </label>
            </div>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
