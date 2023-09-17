import { Layout } from "antd";
import { HeaderFixed } from "@/ui/components/common/header";

const { Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderFixed />
      <Content>{children}</Content>
      <Footer>
        {/* <div className="container footer-content text-sm text-center">
          Copyright @Solfin {yearNow}. All Right Reserved
        </div> */}
      </Footer>
    </>
  );
};
export default MainLayout;
