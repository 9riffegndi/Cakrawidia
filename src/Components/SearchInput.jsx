import React from "react";

const SearchInput = ({ value, onChange, placeholder = "Search", className = "" }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`input  w-full  border-secondary ${className}`}
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchInput;
