import React from 'react'
import Image from './Image'
import Heading5 from './Heading5'
import SubHeading from './SubHeading'

const WorkCard = ({className,src,alt,title,text}) => {
  return (
    <div className='w-[424px] rounded-20 bg-white hover:shadow-2xl duration-300'>
      <Image className="" src={src} alt={alt}/>
      <Heading5 className={`text-center pt-[30px] pb-2.5 ${className}`} text={title}/>
      <SubHeading className="text-center px-[42px] pb-[30px]" text={text}/>
    </div>
  )
}

export default WorkCard
