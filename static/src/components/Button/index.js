import React from 'react'

const Button = ({ label, onClick }) => {
 return (
  <div>
   <button
    onClick={onClick && onClick}
    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
    {label || "Submit"}
   </button>
  </div>
 )
}

export default Button