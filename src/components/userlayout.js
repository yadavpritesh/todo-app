import React from 'react';
import Card from './card'
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

const UserLayout = ({tickets,user,filterby,theme})=>{
    const isDarkMode = theme === 'dark';
    filterAndSortItems(tickets,filterby);

    const getUserName = (userId) => {
        const currentUser = user.find((u) => u.id === userId);
        return currentUser ? currentUser.name : '';
    };

  const usr1Items = tickets.filter((todo) => todo.userId === 'usr-1');
  const usr2Items = tickets.filter((todo) => todo.userId  === 'usr-2');
  const usr3Items = tickets.filter((todo) => todo.userId  === 'usr-3');
  const usr4Items = tickets.filter((todo) => todo.userId  === 'usr-4');
  const usr5Items = tickets.filter((todo) => todo.userId  === 'usr-5');
     
  return (
    <div className="grid grid-cols-5 gap-4 p-8">
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">{`${getUserName('usr-1')}`}</h2>
            <p className='pl-3 pt-1'>{usr1Items.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {usr1Items.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">{`${getUserName('usr-2')}`}</h2>
            <p className='pl-3 pt-1'>{usr2Items.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {usr2Items.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">{`${getUserName('usr-3')}`}</h2>
            <p className='pl-3 pt-1'>{usr3Items .length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {usr3Items .map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">{`${getUserName('usr-4')}`}</h2>
            <p className='pl-3 pt-1'>{usr4Items.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {usr4Items.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      <div className="col-span-1 p-4">
          <div className='flex items-center'>
            <h2 className="text-lg font-semibold">{`${getUserName('usr-5')}`}</h2>
            <p className='pl-3 pt-1'>{usr5Items.length}</p>
            <div className="ml-auto flex space-x-1">
            <Image src='/plus.png' alt={'logo'} width={25} height={20} />
            <Image src='/menu.png' alt={'logo'} width={25} height={20} />
          </div>
          </div>
        {usr5Items.map((todo, index) => (
          <div key={index} className="mt-6 col-span-1">
            <Card title={todo.title} content={todo.id} isDarkMode={isDarkMode} tag={todo.tag}/>
          </div>
       ))}
      </div>
      

    </div>
  );
};

export default UserLayout;
