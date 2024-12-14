// src/Components/Topics/TopicsCategory.jsx
import React from 'react';
import TopicsList from './TopicsList';

function TopicsCategory({onTopicSelect}) {
  return (
    <div className="min-h-screen  col-span-12 hidden md:flex md:col-span-3 flex-col gap-2">
      <TopicsList onTopicSelect={onTopicSelect} />
    </div>
  );
}

export default TopicsCategory;
