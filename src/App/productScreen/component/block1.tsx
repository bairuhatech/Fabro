import React from "react";
import { Col, Row } from "react-bootstrap";
import Cars from "../../../asset/image/image 20.png";
import Bike from "../../../asset/image/image 21.png";
import Microfibre from "../../../asset/image/image 22.png";
import BackCusions from "../../../asset/image/image 23.png";
import Nexkcusion from "../../../asset/image/image 24.png";
import CarSeat from "../../../asset/image/image 19.png";
import { useNavigate } from "react-router";
const FindYourProjuct = () => {
  const navigate = useNavigate();

  const udaif = () => {
    navigate("/viewPageScreen")
  }
  const productData = [
    { imageSrc: Cars, text: "CAR COVERS" },
    { imageSrc: Bike, text: "BIKE COVERS" },
    { imageSrc: Microfibre, text: "MICROFIBER CLOTH" },
    { imageSrc: BackCusions, text: "BACK CUSIONS" },
    { imageSrc: Nexkcusion, text: "NECK CUSHIONS" },
    { imageSrc: CarSeat, text: "CAR SEAT ORGANISERS" },
  ];
  return (
    <div>
      <div className="findYourProjuct-Box1">Our Product Collections</div>
      <Row>
        {productData.map((product, index) => (
          <Col md={2} sm={4} xs={6} key={index}>
            <div className="findYourProjuct-Box3" onClick={udaif}>
              <img src={product.imageSrc} className="findYourProjuct-Img1" />
              <div className="findYourProjuct-Txt">{product.text}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FindYourProjuct;
