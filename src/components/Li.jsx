import React from 'react'

const Li = ({text,className}) => {
  return (
    <li className={`text-lg font-normal text-ash font-inter hover:font-bold hover:text-primary duration-300 cursor-pointer ${className}`}>{text}</li>
  )
}

export default Li
