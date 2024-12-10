import React from "react";

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="textarea textarea-bordered resize-none min-h-[200px] rounded-md w-full mt-5"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
