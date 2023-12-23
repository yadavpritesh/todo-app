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

const PriorityLayout = ({tickets,filterby,theme}) => {
    const isDarkMode = theme === 'dark';
    filterAndSortItems(tickets,filterby);
  const nopriorityitems = tickets.filter((todo) => todo.priority === 0);
  const lowItems = tickets.filter((todo) => todo.priority === 1);
  const mediumItems = tickets.filter((todo) => todo.priority === 2);
  const HighItems = tickets.filter((todo) => todo.priority === 3);
  const urgentItems = tickets.filter((todo) => todo.priority === 4);
     
  return (
    <div className="grid grid-cols-5 gap-4 p-8">
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">No Priority</h2>
            <p className='pl-3 pt-1'>{nopriorityitems.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image alt={'logo'} src='/plus.png' width={25} height={20} />
            <Image alt={'logo'} src='/menu.png' width={25} height={20} />
          </div>
          </div>
        {nopriorityitems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">Low</h2>
            <p className='pl-3 pt-1'>{lowItems.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {lowItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">Medium</h2>
            <p className='pl-3 pt-1'>{mediumItems .length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {mediumItems .map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">High </h2>
            <p className='pl-3 pt-1'>{HighItems.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {HighItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">Urgent</h2>
            <p className='pl-3 pt-1'>{urgentItems.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'}  width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {urgentItems.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      

    </div>
  );
};

export default PriorityLayout;
