import React, { useEffect, useState } from "react";
import { HeroSection } from "../common/HeroSection";
import PortfolioComponent from "../Portfolio";

export const HomeV2 = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <PortfolioComponent />
    </div>
  );
};
