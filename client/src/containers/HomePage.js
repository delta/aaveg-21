import React from "react";

import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import { SocialIcons } from "../components/SocialMedia";

export const HomePage = () => {
  return (
    <>
      <Home />
      <Footer />
      <SocialIcons/>
    </>
  );
};
