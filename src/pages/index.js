import React, { useEffect, useState } from 'react';
import StatusLayout from '@/components/statuslayout';
import PriorityLayout from '@/components/prioritylayout';
import UserLayout from '@/components/userlayout';
import Nextdropdown from '@/components/nextdropdown';
import axios from 'axios';
import Image from 'next/image';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';
import Cookies from 'js-cookie';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const nestedDropdown1Items = [
  { label: 'Status' },
  { label: 'User' },
  { label: 'Priority' },
];

const nestedDropdown2Items = [
  { label: 'Title' },
  { label: 'Priority' },
];

export default function Home() {
  const [Tickets, setTickets] = useState([]);
  const [User, setUser] = useState([]);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const savedLabel1 = Cookies.get('selectedLabel_dropdown1') || null;
  const savedLabel2 = Cookies.get('selectedLabel_dropdown2') || null;
  const [filter, setFilter] = useState('');
  const [filter1, setFilter1] = useState('');
  
  useEffect(() => {
    setFilter(savedLabel1);
    setFilter1(savedLabel2);
    setMounted(true);
  }, []);
  
  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  useEffect(() => {
    if (Cookies.get('theme') === 'dark' || currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const init = async () => {
      const response = await axios.get(
        'https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers'
      );
      setTickets(response.data.tickets);
      setUser(response.data.users);
    };

    if (mounted) {
      init();
    }
  }, [currentTheme, mounted]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleFilterChange1 = (selectedFilter) => {
    setFilter1(selectedFilter);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between ml-10 mt-8">
        <Menu as="div" className="relative inline-block text-left">
          <div className="inline-flex">
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <Image src="/options.png" width={20} height={25} alt="Options" />
              Display
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
            <Menu.Items className="absolute  z-10 mt-2 w-30 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className=" inline-flex py-1">
                <div className="px-4 py-2">
                  <h1 className="text-gray-400">Grouping</h1>
                </div>
                <div className="relative ml-20">
                  <Nextdropdown items={nestedDropdown1Items} onFilterChange={handleFilterChange} dropdownId="dropdown1" />
                </div>
              </div>
              <div className=" inline-flex py-1">
                <div className="px-4 py-2">
                  <h1 className="text-gray-400">Ordering</h1>
                </div>
                <div className="relative ml-20">
                  <Nextdropdown items={nestedDropdown2Items} onFilterChange={handleFilterChange1} dropdownId="dropdown2" />
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="flex items-center space-x-2 mr-8">
          {currentTheme=== 'dark' ? (
            <button
            className="bg-black-700 hover:bg-black w-12 h-12 rounded-md border-purple-400 border-2 p-2 flex items-center justify-center"
            onClick={() => setTheme('light')}
            >
                <Image src="/sunny.png" alt="logo" height={16} width={20} className="bg-white rounded-full p-2"/>
            </button>
          ) : (
            <button
              className="bg-gray-100 w-12 h-12 rounded-md border-purple-400 border-2 p-2 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.png" alt="logo" height={16} width={20} />
            </button>
          )}
        </div>
      </div>
      <div className={`flex-1 mt-8 ${currentTheme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
        {filter === 'User' ? (
          <UserLayout tickets={Tickets} user={User} filterby={filter1} theme={currentTheme} />
          ) : filter === 'Priority' ? (
            <PriorityLayout tickets={Tickets} filterby={filter1} theme={currentTheme} />
            ) : (
          <StatusLayout tickets={Tickets} filterby={filter1} theme={currentTheme} />
        )}
      </div>
    </div>
  );
}













