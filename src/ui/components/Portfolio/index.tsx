import { Col, Row, Button, Form, Input } from "antd";
import { FormHeader } from "../common/FormHeader";

const PortfolioComponent = () => {
  return (
    <>
      <div className="md:max-lg:flex px-10 bg-[#F4F3EF] text-center">
        <Row className="min-[1024px]:px-[120px]">
          <FormHeader title="Portfolio" />
        </Row>
      </div>
    </>
  );
};

export default PortfolioComponent;
