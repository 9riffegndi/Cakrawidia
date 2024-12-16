import React from 'react';

export default function InputPost({label='',placeholder= '', classname = '', type = 'text', value, onChange }) {
  return (
    <div className='flex justify-center items-start flex-col gap-1'>
        <h1 className={`ml-3 text-sm ${classname}`} font-bold text-xs>{label} <span className='text-red-500'>*</span></h1>
        <input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            className={`w-full border input-md border-secondary focus:bg-slate-200 rounded-full  ${classname}`}
            required
        />
    </div>
  );
}
