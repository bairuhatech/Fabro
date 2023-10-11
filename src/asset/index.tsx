import React from "react";
import WebsiteHeader from "../component/websiteHeader";
import HomeScreen from "./homeScreen";
import ProductScreen from "./productScreen";
import WebsiteFooter from "../component/websiteFooter";
import ContactScreen from "./contactScreen";
import ViewPageScreen from "./viewPage";

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <HomeScreen />
      <ViewPageScreen />
      <ProductScreen />
      <ContactScreen />
      <WebsiteFooter />
    </>
  );
};

export default Home;
