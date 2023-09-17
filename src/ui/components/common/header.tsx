import { Row, Col, Avatar, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export const HeaderFixed = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative">
        <Row className="fixed top-0 left-0 right-0 p-10 w-full z-50 bg-[#F4F3EF]">
          <Col xs={12} xl={12}>
            <Link href="/" scroll={false}>
              <Avatar size={40} src={"/img/IMG_1583.JPG"} />{" "}
              <span className="font-bold p-4 text-black">rizkydh</span>
            </Link>
          </Col>
          <Col xs={12} xl={12} className="text-right">
            <Button
              shape="round"
              size="large"
              style={{ border: "solid 1px #22668D" }}
              onClick={() => router.push("/contact")}
              className="hover:bg-[#22668D] group active:bg-[#22668D] focus:outline-none focus:ring focus:ring-[#22668D]"
            >
              <span className="text-[#22668D] group-hover:text-white">
                Say Hello
              </span>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
