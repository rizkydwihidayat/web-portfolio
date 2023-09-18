import React, { useEffect, useState } from "react";
import PortfolioComponent from "../Portfolio";
import { HeroSection } from "../HeroSection";

export const HomeV2 = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <PortfolioComponent />
    </div>
  );
};
