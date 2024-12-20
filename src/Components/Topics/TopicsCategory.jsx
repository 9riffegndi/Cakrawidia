// src/Components/Topics/TopicsCategory.jsx
import React from 'react';





function TopicsCategory({topics, className, onTopicSelect}) {
  return (
    
    <div className= "md:min-h-screen border justify-start items-center  rounded-md md:col-span-3 p-4 md:p-0 col-span-12  md:flex-col flex overflow-auto md:gap-0 gap-2">
      <h1 onClick={() => onTopicSelect("")} className=" cursor-pointer bg-neutral md:p-4 p-1 font-semibold md:font-bold text-primary md:rounded-none text-xs md:text-sm rounded-full w-full">SemuaTopik</h1>
        {topics.map((topic) => (
          <li className="list-none w-full " key={topic.id}>
            <p
              className='md:bg-transparent text-start bg-neutral text-primary md:text-secondary border-none shadow-none list-none md:rounded-none rounded-full flex justify-start w-max md:w-full  btn btn-xs md:btn-md'
              onClick={() => onTopicSelect(topic.name)}
            >
              {topic.name}
            </p>
          </li>
        ))}
    </div>
  );
}

export default TopicsCategory;
