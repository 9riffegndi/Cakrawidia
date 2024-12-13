import React from "react";

const Textarea = ({ value, onChange, placeholder, className="" }) => {
  return (
    <textarea
      className={`textarea textarea-bordered resize-none rounded-md w-full ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
