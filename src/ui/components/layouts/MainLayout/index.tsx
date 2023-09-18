import { motion } from "framer-motion";
import { MainLayout as MainLayoutV1 } from "./section/index";
import { Analytics } from "@vercel/analytics/react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        <MainLayoutV1>
          {children}
          <Analytics />
        </MainLayoutV1>
      </motion.main>
    </>
  );
};
export default MainLayout;
