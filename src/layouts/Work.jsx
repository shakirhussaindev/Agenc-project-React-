import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Flex from "../components/Flex";
import Li from "../components/Li";
import Container from "../components/Container";
import WorkCard from "../components/WorkCard";
import Img1 from "../assets/workimg1.png";
import Img2 from "../assets/workimg2.png";
import Img3 from "../assets/workimg3.png";
import Img4 from "../assets/workimg4.png";
import Img5 from "../assets/workimg5.png";
import Img6 from "../assets/workimg6.png";

const Work = () => {
  return (
    <section className="bg-dark7 py-[150px]">
      <Container>
        <Heading className="text-center" text="Our Recent Work" />
        <SubHeading className="w-[620px] text-center mx-auto pt-5 pb-[30px]"
          text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
          <ul className="flex justify-between">
            <Li className="text-xl text-[#A1A1A1] font-medium hover:font-semibold hover:text-primary" text="All"/>
            <Li className="text-xl text-[#A1A1A1] font-medium hover:font-semibold hover:text-primary" text="Mobile Design"/>
            <Li className="text-xl text-[#A1A1A1] font-medium hover:font-semibold hover:text-primary" text="Web design"/>
            <Li className="text-xl text-[#A1A1A1] font-medium hover:font-semibold hover:text-primary" text="Branding"/>
            <Li className="text-xl text-[#A1A1A1] font-medium hover:font-semibold hover:text-primary" text="Illustration"/>
            <Li className="text-xl text-[#A1A1A1] font-medium hover:font-semibold hover:text-primary" text="Digital Marketing"/>
          </ul>
          <div>
            <Flex className="flex-wrap gap-6 mt-[50px]">
              <WorkCard src={Img1} title="Task Management App" text="This is a task management application that can help you be more "/>
              <WorkCard src={Img2} title="Saas Landing Page Design" text="This is a task management   application that can help you be more "/>
              <WorkCard src={Img3} title="App Design" text="This is a task management   application that can help you be more "/>
              <WorkCard src={Img4} title="Landing Page Design" text="This is a task management   application that can help you be more "/>
              <WorkCard src={Img5} title="Dashboard Design" text="This is a task management   application that can help you be more "/>
              <WorkCard src={Img6} title="Web App Design" text="This is a task management   application that can help you be more "/>
            </Flex>
          </div>
      </Container>
    </section>
  );
};

export default Work;
