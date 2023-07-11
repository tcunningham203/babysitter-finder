import React from 'react';

const EdProForm = ({ placeholder, id }) => {
  return (
    <div>
      <textarea
        id={id}
        name="message"
        placeholder={placeholder}
        rows={4}
        required
        className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none w-full h-52 text-lg border-gray-300 rounded-md"
      />
    </div>
  );
};

export default EdProForm;
