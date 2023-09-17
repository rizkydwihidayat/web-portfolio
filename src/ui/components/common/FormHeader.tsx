import { Divider, Typography } from "antd";

type FormHeaderProps = {
  title: string | React.ReactNode;
};

export const FormHeader = ({ title }: FormHeaderProps) => (
  <div>
    <Typography.Title level={2} className="mantra-form-title">
      {title}
    </Typography.Title>
    <Divider className="w-2/5 bg-[#D1D2D4] my-2" />
  </div>
);
