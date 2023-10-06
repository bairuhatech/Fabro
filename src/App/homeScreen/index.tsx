// HomeScreen.js
import React from "react";
import WebsiteFooter from "../../component/websiteFooter";
import WebsiteHeader from "../../component/websiteHeader";
import "./styles.scss";
import Car from "../../asset/image/image 18.png";
import CarSeat from "../../asset/image/image 17.png";
import Logo from "../../asset/image/path4.png";
import { Carousel } from "antd";

function HomeScreen() {
  return (
    <div className="homeScreen-Box1">
      
      <div className="homeScreen-Box2">
     <div>
     
        
          
          <Carousel autoplay dotPosition="right" effect="fade">
          
            <div className="carousal">
            
              <img className="homeScreen-carousalImg" src={Car} alt="" />
            </div>
            <div className="carousal">
              <img className="homeScreen-carousalImg" src={CarSeat} alt="" />
            </div>
          </Carousel>
        
        <div className="homeScreen-Box3">
        <WebsiteHeader/>
          <div className="homeScreen-Box4">
          
            <img className="homeScrn-Logo" src={Logo} alt="" />
          </div>
          <div className="homeScreen-Txt1">Redefining Identity</div>
        </div>
        
      </div>
      </div>
      <WebsiteFooter />
    </div>
  );
}

export default HomeScreen;
