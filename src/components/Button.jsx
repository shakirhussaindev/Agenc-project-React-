import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-primary py-[15px] px-[42px] text-white text-xl font-semibold font-inter rounded-[10px] border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary duration-500 ${className}`}>{text}</button>
  )
}

export default Button
