import React from "react";
import WebsiteFooter from "../../component/websiteFooter";
import WebsiteHeader from "../../component/websiteHeader";
import "./styles.scss";
function HomeScreen() {
  return (
    <>
      <WebsiteHeader />
      <div className="homeScreen-Box1"></div>
      <WebsiteFooter />
    </>
  );
}

export default HomeScreen;
