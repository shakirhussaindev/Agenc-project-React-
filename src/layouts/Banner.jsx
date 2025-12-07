import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Button from "../components/Button";
import Image from "../components/Image";
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="pt-20">
      <Container>
        <Flex className='items-center'>
          <div className="w-1/2">
            <h1 className="text-[75px] font-bold text-dark font-inter leading-[130%]">We Help brands with high quality services</h1>
            <p className="w-[604px] text-base text-ash font-inter font-normal pt-5 pb-8 leading-[26px]">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
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
