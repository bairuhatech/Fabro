import React from "react";
import WebsiteFooter from "../../component/websiteFooter";
import WebsiteHeader from "../../component/websiteHeader";
import "./styles.scss";
import Car from "../../asset/image/image 18.png";
function HomeScreen() {
  return (
    <div className="homeScreen-Box1">
      <WebsiteHeader />
      <div className="homeScreen-Box2">
        <img className="img-fluid" src={Car} alt="" />
      </div>
      <WebsiteFooter />
    </div>
  );
}

export default HomeScreen;
