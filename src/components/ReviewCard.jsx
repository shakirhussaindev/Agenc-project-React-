import React from "react";
import Image from "./Image";
import RevieIcon from "../assets/reviewicon.png";
import SubHeading from "./SubHeading";
import { FaStar } from "react-icons/fa";
import Flex from "./Flex";

const ReviewCard = ({clientpic,clientName,clientTitle}) => {
  return (
    <div className="w-[424px] bg-white rounded-20 py-[54px] px-[58px] hover:shadow-xl duration-300">
      <div className="">
        <Image src={RevieIcon} />
        <SubHeading className="w-[306px] py-5 text-dark3" text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."/>
        <ul className="flex gap-x-[5px] pb-8">
          <li><FaStar className="text-[#FFAC4A] text-xl"/></li>
          <li><FaStar className="text-[#FFAC4A] text-xl"/></li>
          <li><FaStar className="text-[#FFAC4A] text-xl"/></li>
          <li><FaStar className="text-[#FFAC4A] text-xl"/></li>
          <li><FaStar className="text-[#FFAC4A] text-xl"/></li>
        </ul>
        <Flex className="gap-5">
          <Image src={clientpic}/>
          <div>
            <p className="text-xl text-dark font-inter font-semibold">{clientName}</p>
            <p className="text-base text-dark3 font-inter font-normal">{clientTitle}</p>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default ReviewCard;
