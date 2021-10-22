export default function Info({ age, email, zipCode, handleInput }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="age" className="sr-only">
        Age
      </label>
      <input
        type="number"
        name="age"
        id="age"
        value={age}
        onChange={handleInput}
        className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Age"
      />
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleInput}
        className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Email"
      />
      <label htmlFor="zipCode" className="sr-only">
        Zip Code
      </label>
      <input
        type="number"
        name="zipCode"
        id="zipCode"
        value={zipCode}
        onChange={handleInput}
        className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Zip Code"
      />
    </div>
  );
}
