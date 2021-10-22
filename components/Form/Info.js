export default function Info() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="age" className="sr-only">
        Age
      </label>
      <input
        type="number"
        name="age"
        id="age"
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
        className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Zip Code"
      />
    </div>
  );
}
