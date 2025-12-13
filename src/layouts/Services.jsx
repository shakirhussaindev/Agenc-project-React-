import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ServiceCard from '../components/ServiceCard'
import ServiceIcon1 from '../assets/serviceicon1.png'
import ServiceIcon2 from '../assets/serviceicon2.png'
import ServiceIcon3 from '../assets/serviceicon3.png'
import ServiceIcon4 from '../assets/serviceicon4.png'
import ServiceIcon5 from '../assets/serviceicon5.png'
import ServiceIcon6 from '../assets/serviceicon6.png'

const Services = () => {
  return (
    <section className='pb-[103px]'>
      <Container>
        <Heading className="text-center" text='Our Provided Services'/>
        <SubHeading className="w-[609px] text-center mx-auto pt-5 pb-50" text="There are many   variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in   some form."/>
        <Flex className="gap-6 flex-wrap">
          <ServiceCard src={ServiceIcon1} title="Web Design" des="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
          <ServiceCard src={ServiceIcon2} title="UI/UX Design" des="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
          <ServiceCard src={ServiceIcon3} title="Web Development" des="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
          <ServiceCard src={ServiceIcon4} title="Motion Graphics" des="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
          <ServiceCard src={ServiceIcon5} title="3D Animation" des="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
          <ServiceCard src={ServiceIcon6} title="Digital Marketing" des="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
        </Flex>
      </Container>
    </section>
  )
}

export default Services
