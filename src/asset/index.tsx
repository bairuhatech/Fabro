import React from "react";
import WebsiteHeader from "../component/websiteHeader";
import WebsiteFooter from "../component/websiteFooter";
import ViewPageScreen from "../App/viewPage";
import ContactScreen from "../App/contactScreen";
import HomeScreen from "../App/homeScreen";
import ProductScreen from "../App/productScreen";

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
