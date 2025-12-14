import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import SubHeading from '../components/SubHeading'
import FooterLi from '../components/FooterLi'

const Footer = () => {
  return (
    <footer className='mt-150 mb-50 '>
      <Container>
        <Flex>
          <div className='w-4/12'>
          <Image src={Logo}/>
          <SubHeading className="w-[355px] text-dark3 pt-[30px]" text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."/>
          </div>
          <div className='w-2/12'>
          <strong className='text-xl text-dark font-inter font-semibold'>About</strong>
          <ul className='flex flex-col gap-y-5 mt-9'>
            <FooterLi text="About Us"/>
            <FooterLi text="Features"/>
            <FooterLi text="News"/>
            <FooterLi text="Careers"/>
          </ul>
          </div>
          <div className='w-2/12'>
          <strong className='text-xl text-dark font-inter font-semibold'>Company</strong>
          <ul className='flex flex-col gap-y-5 mt-9'>
            <FooterLi text="Our Team"/>
            <FooterLi text="Partner With Us"/>
            <FooterLi text="FAQ"/>
            <FooterLi text="Blog"/>
          </ul>
          </div>
          <div className='w-2/12'>
          <strong className='text-xl text-dark font-inter font-semibold'>Support</strong>
          <ul className='flex flex-col gap-y-5 mt-9'>
            <FooterLi text="About"/>
            <FooterLi text="Support Center"/>
            <FooterLi text="Feedback"/>
            <FooterLi text="Contact Us"/>
            <FooterLi text="Accessibility"/>
          </ul>
          </div>
          <div className='w-2/12'>
          <strong className='text-xl text-dark font-inter font-semibold'>Get in touch</strong>
          <ul className='flex flex-col gap-y-5 mt-9'>
            <FooterLi text="info@gmail.com"/>
            <FooterLi text="+88 0121 0212"/>
          </ul>
          </div>
        </Flex>
        <div className='border-t border-[#E8E8E8] pt-5 mt-50'>
          <SubHeading className="text-[#D0D0D0] text-center" text="All credit goes to @agence.com"/>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
