import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const answers = [
  "At a quick lube / oil change shop",
  "At a car dealership",
  "At a mechanic/repair shop",
  "At a tire service center",
  "A friend or family member changes it for me",
  "I change it myself",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FirstQuestion({ handleChooseRadial }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-6">
      <h3 className="text-white text-center mb-6">
        How do you change your oil?
      </h3>
      <RadioGroup
        value={selected}
        onChange={(e) => handleChooseRadial(e, setSelected, "oilChange")}
      >
        <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
        <div className="bg-white rounded-md -space-y-px">
          {answers.map((answer, i) => (
            <RadioGroup.Option
              key={answer}
              value={answer}
              className={({ checked }) =>
                classNames(
                  i === 0 ? "rounded-tl-md rounded-tr-md" : "",
                  i === answers.length - 1 ? "rounded-bl-md rounded-br-md" : "",
                  checked
                    ? "bg-reflex-100 border-reflex-200 z-10"
                    : "border-gray-200",
                  "relative border p-4 flex cursor-pointer focus:outline-none"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span
                    className={classNames(
                      checked
                        ? "bg-reflex-600 border-transparent"
                        : "bg-white border-gray-300",
                      active ? "ring-2 ring-offset-2 ring-reflex-500" : "",
                      "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <div className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked ? "text-reflex-900" : "text-gray-900",
                        "block text-sm font-medium"
                      )}
                    >
                      {answer}
                    </RadioGroup.Label>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
