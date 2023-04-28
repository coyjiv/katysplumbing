import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const people = [
  {
    id: 1,
    name: 'Appliance',
    avatar: './img/business-type/appliance.jpg',
  },
  {
    id: 2,
    name: 'Cabinets',
    avatar: './img/business-type/cabinets.jpeg',
  },
  {
    id: 3,
    name: 'Communication',
    avatar: './img/business-type/communication.png',
  },
  {
    id: 4,
    name: 'Decks',
    avatar: './img/business-type/decks.jpg',
  },
  {
    id: 5,
    name: 'Development',
    avatar: './img/business-type/cabinets.jpeg',
  },
  {
    id: 6,
    name: 'Door',
    avatar: './img/business-type/door.jpg',
  },
  {
    id: 7,
    name: 'Drywall',
    avatar: './img/business-type/drywall.jpg',
  },
  {
    id: 8,
    name: 'Flooring',
    avatar: './img/business-type/flooring.jpeg',
  },
  {
    id: 9,
    name: 'Foundation',
    avatar: './img/business-type/foundation.jpg',
  },
  {
    id: 10,
    name: 'Garage',
    avatar: './img/business-type/garage.jpg',
  },
  {
    id: 11,
    name: 'Grading',
    avatar: './img/business-type/grading.jpeg',
  },
  {
    id: 12,
    name: 'Insulation',
    avatar: './img/business-type/insulation.jpg',
  },
  {
    id: 13,
    name: 'Joiners',
    avatar: './img/business-type/joiners.jpg',
  },
  {
    id: 14,
    name: 'Landscaping',
    avatar: './img/business-type/landscaping.jpeg',
  },
  {
    id: 15,
    name: 'Land Surveyors',
    avatar: './img/business-type/land-surveyors.jpg',
  },
  {
    id: 16,
    name: 'Painting',
    avatar: './img/business-type/painting.jpg',
  },
  {
    id: 17,
    name: 'Roofing',
    avatar: './img/business-type/roofing.jpg',
  },
  {
    id: 18,
    name: 'Siding',
    avatar: './img/business-type/siding.jpg',
  },
  {
    id: 19,
    name: 'Windows',
    avatar: './img/business-type/windows.jpg',
  },
  {
    id: 20,
    name: 'Other',
    avatar: './img/business-type/other.jpg',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DropdownBusiness({ onChange }) {
  const [selected, setSelected] = useState(null);

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value);
        onChange(value.name);
      }}
    >
      {({ open }) => (
        <>
          <div className='relative  mt-2'>
            <Listbox.Button className='min-h-[36px] relative flex justify-around w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#986235] sm:text-sm sm:leading-6'>
              <span className='flex items-center'>
                {selected && (
                  <img
                    src={selected.avatar}
                    alt=''
                    className='h-5 w-5 flex-shrink-0 rounded-full'
                  />
                )}
                <span className='ml-3 block truncate'>{selected?.name}</span>
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'bg-[#986235] duration-300 text-white'
                          : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-lg'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex gap-4 items-center'>
                          <img
                            src={person.avatar}
                            alt='business type'
                            className='h-12 w-12 flex-shrink-0 rounded-full'
                            style={{ margin: 0 }}
                          />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'w-1/2 block truncate'
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-[#986235]',
                              'absolute inset-y-0 right-0 flex items-center pr-4 '
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
