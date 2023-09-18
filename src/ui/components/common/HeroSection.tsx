import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "description",
  description: "Contains a profile picture and a summary of personal biography",
};

export const HeroSection = () => {
  return (
    <>
      <Row className="min-[1024px]:px-[120px] my-10 bg-[#F4F3EF] sm:text-left">
        <Col xs={24} xl={14} className="px-10 pt-20 grid content-center">
          <p className="text-[#22668D] font-semibold text-2xl">Hi, I’m Rizky</p>
          <p className="font-semibold text-[46px] leading-[60px] my-2 text-black">
            Creative UI/UX Designer with a Passion for Learning
          </p>
          <p className="my-6 text-[16px] leading-[30px] text-black">
            I’m a freelance UI/UX Designer with a T-shaped skillset and two
            years of experience using Figma. I specialize in user interface,
            creating wireframes and prototypes. I stay up-to-date on the latest
            design trends and technologies, continuously expanding my knowledge
            and skills.
          </p>
          {/* <Row className="mt-5">
            <Col xs={12} xl={6}>
              <Button
                shape="round"
                size="large"
                className="bg-[#22668D] text-white text-[14px] leading-[14px]"
              >
                Contact Me
              </Button>
            </Col>
            <Col xs={12} xl={18}>
              <Button
                type="text"
                icon={<DownloadOutlined />}
                size="large"
                shape="round"
                className="text-[14px] leading-[14px]"
              >
                Download CV
              </Button>
            </Col>
          </Row> */}
        </Col>
        <Col xs={24} xl={10} className="text-center px-10 py-20">
          <div
            className="bg-[url('/img/shape.png')] bg-[length:423px_598px] bg-no-repeat h-[610px]
          relative max-[640px]:bg-[length:350px_528px]"
          ></div>
          <Image
            src="/img/IMG_1583.JPG"
            alt="Profile picture"
            width={400}
            height={520}
            className="mt-[-560px] rounded-md"
          />
        </Col>
      </Row>
    </>
  );
};
