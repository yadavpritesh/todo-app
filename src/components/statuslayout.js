import React from 'react';
import Card from './card';
import Image from 'next/image';

const filterAndSortItems = (items, filterBy) => {
  let filteredItems = items;

  if (filterBy === 'Priority') {
    filteredItems = filteredItems.sort((a, b) => b.priority - a.priority);
  } else if (filterBy === 'Title') {
    filteredItems = filteredItems.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filteredItems;
};

const StatusLayout = ({ tickets, filterby, theme }) => {
  const isDarkMode = theme === 'dark';
  const newtickets = filterAndSortItems(tickets, filterby);

  const backlogItems = newtickets.filter((todo) => todo.status === 'Backlog');
  const todoItems = newtickets.filter((todo) => todo.status === 'Todo');
  const inProgressItems = newtickets.filter((todo) => todo.status === 'In progress');
  const doneItems = newtickets.filter((todo) => todo.status === 'Done');
  const cancelledItems = newtickets.filter((todo) => todo.status === 'Cancelled');

  return (
    <div className="grid grid-cols-5 gap-4 p-8 status-layout ">
      <div className="col-span-1 p-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">Backlog </h2>
          <p className='pl-3 pt-1'>{backlogItems.length}</p>
          <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
        </div>
        {backlogItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag} />
          </div>
        ))}
      </div>
      <div className="col-span-1 p-4">
        <div className='flex items-center'>
          <h2 className="text-lg font-semibold">Todo</h2>
          <p className='pl-3 pt-1'>{todoItems.length}</p>
          <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
        </div>
        {todoItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
        ))}
      </div>
      <div className="col-span-1 p-4">
        <div className='flex items-center'>
          <h2 className="text-lg font-semibold">In Progress </h2>
          <p className='pl-3 pt-1'>{inProgressItems.length}</p>
          <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
        </div>
        {inProgressItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
        ))}
      </div>
      <div className="col-span-1 p-4">
        <div className='flex items-center'>
          <h2 className="text-lg font-semibold">Done </h2>
          <p className='pl-3 pt-1'>{doneItems.length}</p>
          <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
        </div>
        {doneItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag} />
          </div>
        ))}
      </div>
      <div className="col-span-1 p-4">
        <div className='flex items-center'>
          <h2 className="text-lg font-semibold">Cancelled</h2>
          <p className='pl-3 pt-1'>{cancelledItems.length}</p>
          <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
        </div>
        {cancelledItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag} />
          </div>
        ))}
      </div> 


    </div>
  );
};

export default StatusLayout;
