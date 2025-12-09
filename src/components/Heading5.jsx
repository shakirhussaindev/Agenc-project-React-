import React from 'react'

const Heading5 = ({text,className}) => {
  return (
    <h5 className={`text-xl text-dark font-inter font-bold ${className}`}>
      {text}
    </h5>
  )
}

export default Heading5
