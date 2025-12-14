import React from 'react'

const FooterLi = ({className,text}) => {
  return (
    <li className={`text-base text-dark3 font-inter font-normal cursor-pointer ${className}`}>{text}</li>
  )
}

export default FooterLi
