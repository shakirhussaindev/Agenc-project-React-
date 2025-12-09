import React from 'react'

const Heading = ({text,className}) => {
  return (
    <div>
      <h2 className={`text-[45px] text-dark font-bold font-inter ${className}`}>{text}</h2>
    </div>
  )
}

export default Heading
