import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import SuccessCounter from "../components/SuccessCounter";
import Image from "../components/Image";
import Client1 from "../assets/client1.jpg";
import Client2 from "../assets/client2.jpg";
import Client3 from "../assets/client3.jpg";
import Client4 from "../assets/client4.jpg";
import Client5 from "../assets/client5.jpg";
import { FaStar } from "react-icons/fa";

const Succes = () => {
  return (
    <section className="py-[150px]">
      <Container>
        <Flex className="bg-[#F8F6FE] py-[86px] px-12 rounded-[20px]">
          <div className="w-[540px] bg-[#F8F6FE]">
            <h6 className="text-2xl text-primary font-inter font-medium ">
              Our Success
            </h6>
            <h3 className="w-[387px] text-[34px] text-dark font-inter font-semibold pt-4">
              West cost Brand makers-Global Edge
            </h3>
          </div>
          <div className="w-[780px]">
            <Flex className="justify-between">
              <div>
                <SuccessCounter counting="200+" text="Customer Satisfied" />
                <div className="flex w-[35px] h-[35px] rounded-full relative">
                  <div>
                    <Image
                      className="w-full rounded-full absolute top-0 left-0 border-2 border-white"
                      src={Client1}
                    />
                  </div>
                  <div>
                    <Image
                      className="w-full rounded-full absolute top-0 left-[25px] border-2 border-white"
                      src={Client2}
                    />
                  </div>
                  <div>
                    <Image
                      className="w-full rounded-full absolute top-0 left-[50px] border-2 border-white"
                      src={Client3}
                    />
                  </div>
                  <div>
                    <Image
                      className="w-full rounded-full absolute top-0 left-[75px] border-2 border-white"
                      src={Client4}
                    />
                  </div>
                  <div>
                    <Image
                      className="w-full rounded-full absolute top-0 left-[100px] border-2 border-white"
                      src={Client5}
                    />
                  </div>
                </div>
              </div>
              <div>
                <SuccessCounter counting="4.5" text="200+ Avg rating" />
                <ul className="flex gap-x-[5px]">
                  <li>
                    <FaStar className="text-[#FFAC4A]" />
                  </li>
                  <li>
                    <FaStar className="text-[#FFAC4A]" />
                  </li>
                  <li>
                    <FaStar className="text-[#FFAC4A]" />
                  </li>
                  <li>
                    <FaStar className="text-[#FFAC4A]" />
                  </li>
                  <li>
                    <FaStar className="text-[#FFAC4A]" />
                  </li>
                </ul>
              </div>
              <div>
                <SuccessCounter counting="351+" text="Project Delivered" />
                <a className="text-[20px] text-primary font-inter font-medium underline" href="">
                  See Works
                </a>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Succes;
