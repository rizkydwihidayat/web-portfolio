import { Typography } from "antd";

type FormHeaderProps = {
  title: string | React.ReactNode;
};

export const FormHeader = ({ title }: FormHeaderProps) => (
  <div>
    <Typography.Title level={2} className="mantra-form-title">
      {title}
    </Typography.Title>
  </div>
);
