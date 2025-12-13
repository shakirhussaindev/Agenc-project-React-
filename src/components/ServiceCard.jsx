import React from 'react'
import Image from './Image'
import Heading4 from './Heading4'
import SubHeading from './SubHeading'

const ServiceCard = ({className,title,src,des}) => {
  return (
    <div className='w-[424px] rounded-20 hover:shadow-2xl duration-300'>
      <Image className={`mx-auto mt-[47px] ${className}`} src={src}/>
      <Heading4 className={`pt-10 pb-5 text-center ${className}`} text={title}/>
      <SubHeading className={`px-50 text-center mx-auto pb-[47px] ${className}`} text={des}/>
    </div>
  )
}

export default ServiceCard
