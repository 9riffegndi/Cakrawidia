import React from 'react';
import TopicList from './TopicsList';

function TopicsCategory() {
  return (
    <div className='min-h-screen col-span-12 hidden md:flex md:col-span-3 flex-col gap-2'>
      <TopicList />
    </div>
  );
}
export default TopicsCategory;
