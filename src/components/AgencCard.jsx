import React from 'react'
import Image from './Image'
import Heading4 from './Heading4'
import SubHeading from './SubHeading'

const AgencCard = ({src,className,title,text}) => {
  return (
    <div className='w-[344px]'>
      <Image className={` ${className}`} src={src} />
      <Heading4 className={`pt-5 pb-2.5 ${className}`} text={title}/>
      <SubHeading className={` ${className}`} text={text}/>
    </div>
  )
}

export default AgencCard
