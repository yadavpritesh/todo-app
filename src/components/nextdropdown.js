// import React from 'react';
// import { useState, useEffect,useCallback } from 'react'
// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'



// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Nextdropdown({ items, onFilterChange,dropdownId}) {
//   const localStorageKey1 = 'selectedLabel_dropdown1';
//   const localStorageFilterKey = 'selectedFilter_dropdown2';

//   const [filter, setFilter] = useState(() => {
//       const storedLabel = localStorage.getItem(localStorageKey1);
//       return storedLabel || 'null';
//   });

//   const [filter1, setFilter1] = useState(() => {
//       const storedLabel = localStorage.getItem(localStorageFilterKey);
//       return storedLabel || 'null';
//   });

//   const localStorageKey = `selectedLabel_${dropdownId}`;

//   const [labelname, setlabelname] = useState(() => {
//     const storedLabel = localStorage.getItem(localStorageKey);
//     return storedLabel || items[0].label;
//   });

//   const saveToLocalStorage = useCallback(() => {
//     localStorage.setItem(localStorageKey, labelname);
//   }, [labelname]);
  
//   useEffect(() => {
//     saveToLocalStorage();
//   }, [saveToLocalStorage]);

//   const handleItemClick = (item) => {
//     setlabelname(item.label);
//     onFilterChange(item.label);
//   };

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//           {labelname}
//           <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             {items.map((item, index) => (
//               <Menu.Item key={index}>
//                 {({ active }) => (
//                   <button
//                     onClick={() => {
//                       handleItemClick(item)
//                     }}
//                     className={classNames(
//                       active ? 'bg-gray-100 text-black-900' : 'text-gray-700',
//                       'block px-4 py-2 text-sm'
//                     )}
//                   >
//                     {item.label}
//                   </button>
//                 )}
//               </Menu.Item>
//             ))}
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }
import React, { useState, useEffect, useCallback } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Cookies from 'js-cookie';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nextdropdown({ items, onFilterChange, dropdownId }) {
  const cookieKey1 = 'selectedLabel_dropdown1';
  const cookieFilterKey = 'selectedFilter_dropdown2';

  const [filter, setFilter] = useState(() => {
    const storedLabel = Cookies.get(cookieKey1);
    return storedLabel || 'null';
  });

  const [filter1, setFilter1] = useState(() => {
    const storedLabel = Cookies.get(cookieFilterKey);
    return storedLabel || 'null';
  });

  const cookieKey = `selectedLabel_${dropdownId}`;

  const [labelname, setlabelname] = useState(() => {
    const storedLabel = Cookies.get(cookieKey);
    return storedLabel || items[0].label;
  });

  const saveToCookie = useCallback(() => {
    Cookies.set(cookieKey, labelname, { expires: 365 }); 
  }, [labelname, cookieKey]);

  useEffect(() => {
    saveToCookie();
  }, [saveToCookie]);

  const handleItemClick = (item) => {
    setlabelname(item.label);
    onFilterChange(item.label);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {labelname}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={() => {
                      handleItemClick(item);
                    }}
                    className={classNames(
                      active ? 'bg-gray-100 text-black-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}


