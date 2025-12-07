import React from 'react'


const SuccessCounter = ({counting,text}) => {
  return (
    <div>
      <p className='text-[50px] text-dark font-inter font-bold'>{counting}</p>
      <p className='text-[20px] text-ash font-inter font-medium py-5'>{text}</p>
      
    </div>
  
  )
}

export default SuccessCounter
