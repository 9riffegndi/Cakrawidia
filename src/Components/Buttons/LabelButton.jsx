import React from 'react';

const LabelButton = ({ src, label, htmlFor,  ariaLabel, id='', className = '', onClick, alt = 'Button Modal' }) => {
  return (
    <label
      htmlFor={htmlFor}
      aria-label={ariaLabel}
      id={id}
      className={`flex items-center justify-center gap-2 btn-outline bg-secondary text-primary rounded-full font-bold ${className}`}
      onClick={onClick}
    >
      {src && <img src={src} alt={alt} className="p-1" />}
      {label}
    </label>
  );
};

export default LabelButton;
