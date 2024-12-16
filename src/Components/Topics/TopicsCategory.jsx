// src/Components/Topics/TopicsCategory.jsx
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

function TopicsCategory({topics, className, onTopicSelect}) {
  return (
    
    <div className="min-h-screen  col-span-12 hidden md:flex md:col-span-3 flex-col gap-2">
      <ul className={`flex flex-col gap-2 ${className}`}>
        
        <h1 onClick={() => onTopicSelect("")} className="cursor-pointer font-bold p-2 border-b border-secondary bg-neutral text-primary rounded-t">SemuaTopik</h1>

        {topics.map((topic) => (
          <li className="p-2 rounded-md hover:bg-secondary/10" key={topic.id}>
            <PrimaryButton
              onClick={() => onTopicSelect(topic.name)}
              className="bg-transparent text-start hover:bg-transparent text-secondary hover:text-secondary"
              label={topic.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsCategory;
