import { Row, Col } from "antd";
import { SocialMediaComponent } from "./section/Socmed";
import { ProfilePict } from "./section/ProfilePicture";

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
          <Row className="mt-5">
            <Col xs={12} xl={6}>
              <p className="font-semibold text-[16px]">Reach out me on</p>
            </Col>
            <Col xs={12} xl={18}>
              <SocialMediaComponent />
            </Col>
          </Row>
        </Col>
        <Col xs={24} xl={10} className="item-center justify-center pl-10 py-20">
          <ProfilePict />
        </Col>
      </Row>
    </>
  );
};
