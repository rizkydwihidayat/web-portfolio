import { Col, Row, Button, Form, Input } from "antd";
import { FormHeader } from "../common/FormHeader";
import getConfig from "next/config";
import { showError, showSuccess } from "@/ui/utils/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "description",
  description: "Contains a form data to sending message to my email.",
};

const ContactComponent = () => {
  const [form] = Form.useForm();

  const {
    publicRuntimeConfig: { webForm },
  } = getConfig();

  const sendMessage = async () => {
    const name = form.getFieldValue("name");
    const email = form.getFieldValue("email");
    const msg = form.getFieldValue("message");

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("msg", msg);
    data.append("access_key", webForm);

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result)
        showSuccess({
          description: "Thank a lots. Your message has been sent.",
        });
    } catch (error) {
      showError({ error });
    }
  };

  return (
    <>
      <div className="md:max-lg:flex px-10 bg-[#F4F3EF] justify-center pt-40 min-[1024px]:px-40">
        <div className="px-5 text-center">
          <FormHeader
            title="Thanks for taking the time to reach out me. How can I help you
            today?"
          />
        </div>
        <Form
          layout="vertical"
          scrollToFirstError
          size="large"
          form={form}
          className="mt-8"
        >
          <Row gutter={[16, 0]} className="px-5 pb-20 min-[1024px]:px-60">
            <Col xs={24} xl={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    whitespace: true,
                    message: "* Please insert your name.",
                  },
                ]}
                className="w-full"
              >
                <Input placeholder="Insert your name" autoFocus />
              </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: "email",
                    whitespace: true,
                    pattern: /^[\w._\.]+@([\w]+\.)+[\w]{2,4}$/,
                  },
                ]}
                normalize={(value) => value.trim()}
              >
                <Input placeholder="Insert your email" autoFocus />
              </Form.Item>
            </Col>
            <Col xs={24} xl={24}>
              <Form.Item label="Message" name="message">
                <Input.TextArea
                  placeholder="Insert your message"
                  rows={8}
                  className="py-2"
                />
              </Form.Item>
            </Col>
            <Col xs={24} xl={24} className="text-center">
              <Button
                shape="round"
                size="large"
                style={{ border: "solid 1px #22668D" }}
                onClick={sendMessage}
                loading={false}
                className="hover:bg-[#22668D] group active:bg-[#22668D]
                focus:outline-none focus:ring focus:ring-[#22668D] w-[200px]"
              >
                <span className="text-[#22668D] group-hover:text-white">
                  Submit
                </span>
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default ContactComponent;
