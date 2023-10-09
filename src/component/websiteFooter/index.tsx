import React from "react";
import { Input } from "antd";
import { Col, Row } from "react-bootstrap";
import Twitter from "../../asset/image/Frame 89.png";
import Facebook from "../../asset/image/Frame 87.png";
import Instagram from "../../asset/image/Frame 88.png";
import Inimage from "../../asset/image/Frame 86.png";
import Visa from "../../asset/image/Frame.png";
import visa2 from "../../asset/image/Img.png";
import Amex from "../../asset/image/Img (1).png";
import Pimage from "../../asset/image/Img (2).png";
import FabriImage from "../../asset/image/logos.png";
import location from "../../asset/image/location-white.png.png";
import Phone from "../../asset/image/telephone-white.png.png";
import Mailfrom from "../../asset/image/envelope-white.png.png";
import "./styles.scss";

function WebsiteFooter() {
  return (
    <>
      <div className="websiteFooter-Box1">
        <div className="websiteFooter-Box2">
          <Row>
            <Col md={5}>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <img className="websiteFooter-Img1" src={FabriImage} />
                </div>
                <div>
                  <p className="websiteFooter-textesssss">
                    <img src={location} className="websiteFooter----imagesss" />
                    RIYADH-SAUDI ARABIA
                  </p>
                  <p className="websiteFooter-textesssss">
                    <img src={Phone} />
                    +966112390116
                  </p>
                  <p className="websiteFooter-textesssss">
                    <img src={Mailfrom} />
                    fabrosocialonline@gmail.com
                  </p>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className="websiteFooter-Box333">
                <p className="websiteFooter-Txt1">USEFUL LINKS</p>
                <p className="websiteFooter-Txt1">Home</p>
                <p className="websiteFooter-Txt1">About</p>
                <p className="websiteFooter-Txt1">Products</p>
                <p className="websiteFooter-Txt1">Contact Us</p>
              </div>
            </Col>
            <Col md={5}>
              <div>
                <div className="">
                  <Input.Search
                    placeholder="Enter your email"
                    allowClear
                    enterButton="SUBSCRIBE"
                    size="large"
                    className="websitefooter-inputsearch"
                  />
                </div>
                <div>
                  <br />
                  <p className="websiteFooter-Txt1">Social Media</p>
                  <div className="websiteFooter-Box444">
                    <div className="websiteFooter-Img2">
                      <img src={Twitter} />
                    </div>
                    <div className="">
                      <img className="websiteFooter-Img2" src={Instagram} />
                    </div>
                    <div>
                      <img src={Facebook} />
                    </div>
                    <div className="">
                      <img className="websiteFooter-Img2" src={Inimage} />
                    </div>
                  </div>
                  <br />
                  <p className="websiteFooter-Txt1">We Accept</p>
                  <div style={{ display: "flex" }}>
                    <img src={Visa} />
                    <img src={visa2} />
                    <img src={Amex} />
                    <img src={Pimage} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="websiteFooter-Boxes">
        Copyright @ fabroleather | Powered by BairuhaTech
      </div>
    </>
  );
}

export default WebsiteFooter;
