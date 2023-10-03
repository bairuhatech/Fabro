import React from "react";
import WebsiteFooter from "../../component/websiteFooter";
import WebsiteHeader from "../../component/websiteHeader";
import "./styles.scss";
import Car from "../../asset/image/image 18.png";
import CarSeat from "../../asset/image/image 17.png";
import Logo from "../../asset/image/path4.png";
import DownloadImg from "../../asset/image/arrow-down-circle-outline.png";
import { Carousel } from "antd";
function HomeScreen() {
  return (
    <div className="homeScreen-Box1">
      <WebsiteHeader />
      <div className="homeScreen-Box2">
        <div>
          <Carousel autoplay dotPosition="right" effect="fade">
            <div>
              <img className="homeScreen-carousalImg" src={Car} alt="" />
            </div>
            <div>
              <img className="homeScreen-carousalImg" src={CarSeat} alt="" />
            </div>
          </Carousel>
        </div>
        <div className="homeScreen-Box3">
          <div className="homeScreen-Box4">
            <div className="homeScreen-Box5">
              <div className="homeScreen-Box6">
                <img className="img-fluid" src={Logo} alt="" />
              </div>
              <div>
                <br />
                <div className="homeScreen-Txt1">Redefining Identity</div>
                <br />
                <div className="homeScreen-Txt2">
                  Welcome to Fabro, where you'll find stylish car seat covers
                  that enhance your car's appearance, provide comfort, and
                  protect your seat. We offer a wide selection to match your
                  style.
                </div>
              </div>
              <br />
              <div className="homeScreen-Box7">
                <div>
                  <button className="homeScreen-Box8">Contact</button>
                </div>
                <div>
                  <button className="homeScreen-Box9">
                    Download <img src={DownloadImg} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="homeScreen-Box10"></div>
        </div>
      </div>
      <WebsiteFooter />
    </div>
  );
}

export default HomeScreen;
