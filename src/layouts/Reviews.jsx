import React from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import ReviewCard from "../components/ReviewCard";
import Flex from "../components/Flex";
import ClientReview1 from "../assets/clientreview1.png";
import ClientReview2 from "../assets/clientreview2.png";
import ClientReview3 from "../assets/clientreview3.png";
import { GoDotFill } from "react-icons/go";

const Reviews = () => {
  return (
    <section className="mb-72">
      <Container>
        <Heading className="text-center" text="Some Client Reviews" />
        <SubHeading className="w-[620px] mx-auto text-center pt-5" text="There are many variations of passages of Lorem Ipsum available, but themajority have suffered 
        alteration in some form."/>
        <Flex className="gap-x-6">
          <div className="w-4/12 mt-[261px]">
          <ReviewCard clientpic={ClientReview1} clientName="Eric Drake" clientTitle="Digital Marketer"/>
          </div>
          <div className="w-4/12 mt-50">
          <ReviewCard clientpic={ClientReview2} clientName="Awlad Hossain" clientTitle="UX Researcher"/>
          </div>
          <div className="w-4/12 mt-[261px]">
          <ReviewCard clientpic={ClientReview3} clientName="Rosa Farmer" clientTitle="UI Designer"/>
          </div>
        </Flex>
        <ul className="flex justify-center mt-[-170px]">
          <li><GoDotFill className="text-2xl text-primary opacity-10" /></li>
          <li><GoDotFill className="text-2xl text-primary opacity-10" /></li>
          <li><GoDotFill className="text-2xl text-primary"/></li>
          <li><GoDotFill className="text-2xl text-primary opacity-10" /></li>
          <li><GoDotFill className="text-2xl text-primary opacity-10" /></li>
        </ul>
      </Container>
    </section>
  );
};

export default Reviews;
