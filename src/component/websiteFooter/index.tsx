import React from "react";
import "./styles.scss";
import location from "../../asset/image/location-white.png.png";
import phone from "../../asset/image/telephone-white.png.png";
import gmail from "../../asset/image/envelope-white.png.png";
import logo from "../../asset/image/Fabro_logo.png.png";
import img from "../../asset/image/Img.png";
import img1 from "../../asset/image/Img (1).png";
import img2 from "../../asset/image/Img (2).png";
import img3 from "../../asset/image/Img (3).png";
import vector from "../../asset/image/Frame 88.png";
import vector1 from "../../asset/image/Frame 86.png";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BiLogoFacebookCircle} from "react-icons/bi";
import { Link} from 'react-router-dom';
import { Button, Input} from 'antd';


function WebsiteFooter() {
  return (
    <>
      <div className="footer">
        <div className="footer-Main">
          <div className="footer-Box">
            <img className="image_logo" src={logo} alt="" />
            <div className="row">
             <div className="col-md-3">
              <div className="footerInfo_Contacts">
                <div className="contact1">
                  <div className="contactImage1">
                   <img className="contactImage_location" src={location} alt="" />
                  </div>
                  <p>RIYADH-SAUDI ARABIA</p>
                </div>
                <div className="contact2">
                  <div className="contactImage2">
                   <img className="contactImage_phone" src={phone} alt="" />
                  </div>
                  <p>+966112390116</p>
                </div>
                <div className="contact3">
                  <div className="contactImage3">
                   <img className="contactImage_envelope" src={gmail} alt="" />
                  </div>
                  <p>fabrosocialonline@gmail.com</p>
                </div>
              </div>
             </div>
            </div>
            <div className="row1">
             <div className="col1-md-3">
              <div className="footerInfo_Info1">
                <Link to="/another-page" className="link1">USEFUL LINKS</Link>
                <br/>
                <Link to="/another-page" className="link2">Home</Link>
              </div>
              <div className="footerInfo_Info2">
                <Link to="/another-page" className="link3">About</Link>
              </div>
              <div className="footerInfo_Info3">
                <Link to="/another-page" className="link4">Products</Link>
              </div>
              <div className="footerInfo_Info4">
                <Link to="/another-page" className="link5">Contact Us</Link>
              </div>
             </div>
            </div>
            <div className="footerMedia">
              <div className="footerMedia_Box1">
                <Input.Search
                   placeholder="Enter your email"
                   allowClear
                   enterButton="SUBSCRIBE"
                   size="large"
                   className="custom-search"
                  />
              </div>
              <div className="footerMedia_Box2">
                <p>Social Media</p>
                <div className="footerMediaBox2_icons">
                  <div className="icon">
                    <AiFillTwitterCircle className="icon-Vector"/>
                  </div>
                  <div className="icon">
                    <img className="icon-Vector" src={vector} alt="" />
                  </div>
                  <div className="icon">
                    <BiLogoFacebookCircle className="icon-Vector"/>
                  </div>
                  <div className="icon">
                   <img className="icon-Vector" src={vector1} alt="" />
                  </div>
                </div>
              </div>
              <div className="footerCards">
                <p>We Accept</p>
                <div className="paymentList">
                  <div className="Image_Margin">
                    <div className="image">
                      <div className="imgFrame">
                        <img src={img} alt="" />
                        <img  src={img1} alt="" />
                        <img  src={img2} alt="" />
                        <img  src={img3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerSmall">
          <Link to="/another-page" className="link6">Copyright @ fabroleather   |  Powered by BairuhaTech</Link>
        </div>
      </div>
    </>
  );
}

export default WebsiteFooter;
