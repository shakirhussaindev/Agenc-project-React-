import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Button from "../components/Button";
import Image from "../components/Image";
import BannerImg from "../assets/banner.png";
import SubHeading from "../components/SubHeading";

const Banner = () => {
  return (
    <section className="pt-20">
      <Container>
        <Flex className='items-center'>
          <div className="w-1/2">
            <h1 className="text-[75px] font-bold text-dark font-inter leading-[130%]">We Help brands with high quality services</h1>
            <SubHeading className="w-[604px] pt-5 pb-8" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
            <Button text="Get Started"/>
          </div>
          <div>
            <Image src={BannerImg}/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
