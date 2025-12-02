import React from "react";
import Li from "./components/Li";
import Button from "./components/Button";
import Banner from "./assets/cover.png";
import Container from "./components/Container";
import Flex from "./components/Flex";

const App = () => {
  return (
    <>
      <div>
        <Container>
          <Flex>
            {/* <Li text="Home" className="" />
            <Li text=" About " />
            <Li text="  Service" />
            <Li text=" Careers " />
            <Li text="Contact" />
            <Button text="Contact" />
            <Button text="Get Started" />
            <img className="" src={Banner} alt="" /> */}
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default App;
