import { Dispatch, SetStateAction } from 'react';

import { Listbox } from '@headlessui/react';

import { dropBoxList } from '@constants/constantsList';
import { SelectedProps } from '@customTypes/commendTypes';

interface DropBoxProps {
  selected: SelectedProps;
  onChange: Dispatch<SetStateAction<SelectedProps>>;
}
const DropBox = ({ selected, onChange }: DropBoxProps) => {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative w-[140px] cursor-pointer">
        <Listbox.Button className="relative w-full  rounded-lg  py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
        </Listbox.Button>

        <Listbox.Options className="absolute mt-1 max-h-60 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 ">
          {dropBoxList.map((item) => (
            <Listbox.Option
              key={item.id}
              className={({ active }) =>
                `relative py-2 px-3 ${
                  active ? 'bg-sub-2 text-main' : 'text-gray-900'
                }`
              }
              value={item}>
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}>
                    {item.name}
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default DropBox;
