import { Col, Row, Button, Form, Input } from "antd";
import { FormHeader } from "../common/FormHeader";
import { CardPortfolio } from "./section/CardPortfolio";

const PortfolioComponent = () => {
  return (
    <>
      <div className="md:max-lg:flex px-10 bg-[#F4F3EF] pb-20">
        <Row className="min-[1024px]:px-[120px]">
          <Col xs={24} xl={24}>
            <FormHeader title="Portfolio" />
          </Col>
          <Col xs={24} xl={24}>
            <p className="text-[16px] leading-[30px]">
              These are the projects that I’m currently working on
            </p>
          </Col>
        </Row>
        <Row className="min-[1024px]:px-[120px] pt-16">
          <CardPortfolio />
        </Row>
      </div>
    </>
  );
};

export default PortfolioComponent;
