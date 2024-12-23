import React from 'react';


function TopicsCategory({topics, className, onTopicSelect}) {
  return (
    
    <div className= " h-max  border sticky   top-20 color-scrollbar overflow-y-hidden md:overflow-y-auto border-secondary justify-start md:items-start items-center  rounded-xl md:col-span-3 p-1 md:p-0 col-span-12  md:flex-col flex ">
      
      <h1 onClick={() => onTopicSelect("")} className=" cursor-pointer bg-neutral md:p-4 p-1 font-semibold md:font-bold text-primary md:rounded-none text-xs md:text-sm rounded-full w-max md:w-full">SemuaTopik</h1>
    
      <ul className='w-full h-[55px] md:h-[240px] color-scrollbar flex md:flex-col p-4 md:p-0  md:overflow-y-auto  gap-1 '>
        {topics.map((topic) => (
            <li className="list-none w-full " key={topic.id}>
              <p
                className='md:bg-transparent text-start bg-neutral text-primary md:text-secondary border-none shadow-none list-none md:rounded-none rounded-full flex justify-start w-max md:w-full   btn btn-xs md:btn-md'
                onClick={() => onTopicSelect(topic.name)}
              >
                {topic.name}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TopicsCategory;
