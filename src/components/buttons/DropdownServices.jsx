import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  {
    id: 1,
    name: "Residential",
    avatar: "./img/residential.png",
  },
  {
    id: 2,
    name: "Commercial",
    avatar: "./img/commercial.png",
  },
  {
    id: 3,
    name: "Custom",
    avatar: "./img/custom.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownServices({onChange}) {
  const [selected, setSelected] = useState(null);

  return (
    <Listbox value={selected} onChange={(value)=>{setSelected(value); onChange(value.name)}}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="min-h-[36px] relative flex justify-around w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#986235] sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {selected && <img
                  src={selected.avatar}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />}
                <span className="ml-3 block truncate">{selected?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-[#986235] duration-300 text-white"
                          : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9 text-lg"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex gap-4 items-center">
                          <img
                            src={person.avatar}
                            alt="business type"
                            className="h-12 w-12 flex-shrink-0 rounded-full"
                            style={{ margin: 0 }}
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "w-1/2 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-[#986235]",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
