import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const options = ["Male", "Female", "Non-Binary", "Prefer not to say"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gender() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="py-6 ">
      <h3 className="text-white text-center mb-6">What is your gender?</h3>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-4">
          {options.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active }) =>
                classNames(
                  active ? "ring-2 ring-offset-1 ring-reflex-500" : "",
                  "relative block rounded-lg border border-reflex-500 bg-reflex-600 shadow-sm px-6 py-4 cursor-pointer hover:border-gray-900 sm:flex sm:justify-between focus:outline-none"
                )
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label
                        as="p"
                        className={classNames(
                          checked
                            ? "font-normal text-white"
                            : "font-light text-gray-50"
                        )}
                      >
                        {option}
                      </RadioGroup.Label>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      checked ? "border-reflex-100 " : "border-transparent",
                      "absolute -inset-px rounded-lg border-2 pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
