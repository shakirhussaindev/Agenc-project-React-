import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";

const CreateAccount = () => {
  return (
    <section className="bg-dark7 py-150">
      <Container>
        <Flex className="items-center">
          <div className="w-6/12">
            <Heading className="w-[470px]" text="We Do design, Code & Development"/>
            <SubHeading className="w-[513px] pt-5 pb-2.5 text-dark3" text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." />
            <SubHeading className="w-[526px]" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." />
          </div>
          <div className="w-6/12">
          <div className="w-[536px] bg-white rounded-20 py-[61px] px-[43px]">
            <h5 className="text-3xl text-dark font-bold font-inter text-center pb-[30px]">Get a free quote now</h5>
            <label className="text-base text-dark font-medium font-inter" htmlFor="name">Name
              <input id="name" className=" w-full border border-[#E8E8E8] rounded-lg py-[19px] px-6 mt-2.5 text-lg text-dark font-inter font-medium placeholder:text-base placeholder:text-[#D0D0D0] placeholder:font-inter placeholder:font-normal mb-5" type="text" placeholder="Enter your name" />
            </label>
            <label className="text-base text-dark font-medium font-inter" htmlFor="email">Email
              <input id="email" className=" w-full border border-[#E8E8E8] rounded-lg py-[19px] px-6 mt-2.5 text-lg text-dark font-inter font-medium placeholder:text-base placeholder:text-[#D0D0D0] placeholder:font-inter placeholder:font-normal mb-5" type="text" placeholder="Enter your email" />
            </label>
            <label className="text-base text-dark font-medium font-inter" htmlFor="phone">Phone
              <input id="phone" className=" w-full border border-[#E8E8E8] rounded-lg py-[19px] px-6 mt-2.5 text-lg text-dark font-inter font-medium placeholder:text-base placeholder:text-[#D0D0D0] placeholder:font-inter placeholder:font-normal mb-6" type="text" placeholder="Enter your phone number" />
            </label>
            <Button className="w-full py-[19px]" text="Get Pricing Now"/>
          </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CreateAccount;
