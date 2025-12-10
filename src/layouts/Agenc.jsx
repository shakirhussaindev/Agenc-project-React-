import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import AgencCard from "../components/AgencCard";
import AgencIcon1 from "../assets/agencicon1.png";
import AgencIcon2 from "../assets/agencicon2.png";
import AgencIcon3 from "../assets/agencicon3.png";
import AgencBanner from "../assets/agencbanner.png";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Image from "../components/Image";

const Agenc = () => {
  return (
    <section className="mb-150">
      <Container>
        <Flex className="">
          <div className="w-7/12 mt-150">
            <Heading className="w-[518px] pb-5" text="Why You Should Choose Agenc"/>
            <SubHeading className="w-[508px] pb-[85px]" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
            <div className="relative">
              <AgencCard src={AgencIcon1} title="Innovative Ideas" text="Because each project is different, we adapt to your business model."/>
              <div className="absolute top-8 left-[423px]">
                <AgencCard src={AgencIcon2} title="Dedicated Support" text="We provide 24/7 support for all our clients and serve them professionally"/>
              </div>
              <div className="absolute top-[218px] left-[186px]">
                <AgencCard src={AgencIcon3} title="Honest Pricing" text="Pricing on projects are based on various analyzes and are cost effective."/>
              </div>
            </div>
          </div>
          <div className="w-5/12 mt-[268px]">
          <Image className="" src={AgencBanner}/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Agenc;
