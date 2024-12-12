import React from 'react';

export default function InputPost({label='',placeholder= '', classname = '', type = 'text', value, onChange }) {
  return (
    <div className='flex justify-center items-start flex-col gap-3'>
        <h1>{label}</h1>
        <input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            className={`w-full border input-md rounded-full  ${classname}`}
            required
        />
    </div>
  );
}
