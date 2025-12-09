import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <p className={`text-base text-ash font-inter font-normal leading-[26px] ${className}`}>
      {text}
    </p>
  )
}

export default SubHeading
