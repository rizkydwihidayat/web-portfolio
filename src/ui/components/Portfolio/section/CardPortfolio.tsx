import { Row, Col, Card } from "antd";
import Image from "next/image";
import portoImage from "../../../../../public/img/porto-1.png";

export const CardPortfolio = () => {
  return (
    <>
      <Card
        style={{
          borderColor: "white",
          borderLeft: "solid 10px #0300A4",
          padding: "32px 80px",
        }}
        className="max-[640px]:w-[325px] max-[640px]:px-[32px] max-[1024px]:max-w-2xl
        max-[1280px]:max-w-3xl min-[1440px]:max-w-5xl max-[1920px]:w-full"
      >
        <Row>
          <Col xs={24} xl={8}>
            <div className="grid gap-4 place-content-end h-48">
              <p className="text-[36px] leading-[56px] text-[#0300A4] font-medium max-[640px]:text-[24px]">
                Mandorku App
              </p>
              <p className="text-black max-[640px]:text-[12px] pt-10 max-[640px]:pt-5">
                Mobile App Design
              </p>
              <p className="text-[#999999] max-[640px]:text-[12px]">
                Designing a mobile application platform.
              </p>
            </div>
          </Col>
          <Col xs={24} xl={16} className="pt-2">
            <div className="relative max-[640px]:pt-8">
              <Image
                src={portoImage}
                alt="Portfolio image"
                className="max-w-3xl h-[536px] max-[640px]:w-[200px] max-[640px]:h-[150px]
                min-[1024px]:max-w-lg min-[1024px]:max-h-96"
              />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};
