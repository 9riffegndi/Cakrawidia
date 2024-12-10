import React from 'react';
import LabelButton from '../Components/Buttons/LabelButton';
import TopicList from '../Components/Topics/TopicsList';


export default function Sidebar() {
  return (
    <div className='flex min-h-screen flex-col gap-2 bg-primary rounded-lg p-2 '>
      <div className="flex justify-end p-2 w-full items-center font-bold">
        <LabelButton
          htmlFor="my-drawer-4"
          className='btn btn-sm btn-circle absolute top-9 '
          src="https://img.icons8.com/?size=100&id=2i5n7zNvArOt&format=png&color=FFFFFF"
        />
      </div>
      <TopicList /> 
    </div>
  );
}

