import { Spin, Space } from "antd";

export const PageLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-gray-800 ${className}`}
    >
      <Space size="large">
        <Spin size="large" />
      </Space>
      <p className="text-gray-400 mt-2">Loading Solfin...</p>
    </div>
  );
};
