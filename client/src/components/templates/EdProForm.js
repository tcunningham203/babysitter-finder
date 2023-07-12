import React from 'react';

const EdProForm = ({ placeholder, id ,value,onChange,name}) => {
  return (
    <div>
      <textarea
        id={id}
        name={name||"message"}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        required
        className="px-3 placeholder-gray-500 placeholder-opacity-75 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none w-full h-52 text-lg border-gray-300 rounded-md"
      />
    </div>
  );
};

export default EdProForm;
