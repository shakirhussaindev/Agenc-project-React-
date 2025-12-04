import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Li from "../components/Li";
import Button from "../components/Button";
import Image from "../components/Image";
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="py-8">
      <Container>
        <Flex className='justify-between items-center'>
          <div>
            <Image src={Logo} alt={Logo}/>
          </div>
          <div>
            <ul className="flex gap-x-16">
              <Li text="Home" className="" />
              <Li text=" About " />
              <Li text="  Service" />
              <Li text=" Careers " />
              <Li text="Contact" />
            </ul>
          </div>
          <div>
            <Button text="Contact" />
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
