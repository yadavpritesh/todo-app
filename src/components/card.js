import React from 'react';

const Card = ({ title, content, isDarkMode, profilePicture, tag }) => {
  const bgColorClass = isDarkMode ? 'bg-gray-900 ' : 'bg-white';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const contentTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`p-4 rounded shadow ${bgColorClass} ${textClass}`}>
      <div className="flex items-center mb-4">
          <p className={contentTextClass}>{content}</p>
      </div>
        <p className={`text-lg ${textClass}`}>{title}</p>
      {tag && (
        <div className={`flex mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
             <img src='circle.jpeg' alt="tag" className="w-3 h-3 rounded-full mt-1.5 mr-2" />
               {tag}
        </div>
      )}
    </div>
  );
};

export default Card;

