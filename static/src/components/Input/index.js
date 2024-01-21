// Library Imports
import React from 'react';

const Input = ({ label, name, value, onChange }) => {
  return (
   <div>
    <label className="text-gray-900 capitalize text-sm" htmlFor="username">{label}</label>
    <input 
    id="username" 
    type="text" 
    name={name} 
    value={value}
    onChange={onChange}
    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md hover:border-gray-400" 
    />
   </div>

  )
}

export default Input