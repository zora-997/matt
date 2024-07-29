import React from 'react';

function GoalSubtitle({ title, subtitle }) {
  // const combinedTitle = `<span class='text-black md:text-xl text-lg font-bold text-center max-w-[900px] w-60'>${title}</span>`;

  return (
    <div className='w-full flex justify-center items-center mb-5'>
      <h1 className='text-gray-700 md:text-lg font-semibold text-center max-w-[900px] w-full'>
        <span class='text-black md:text-xl text-lg font-bold text-center max-w-[900px] w-60 mr-2 ml-2'>{title}</span>{subtitle}</h1>
    </div>
  );
}

export default GoalSubtitle;
