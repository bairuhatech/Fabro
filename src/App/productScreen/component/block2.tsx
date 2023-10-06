import React from "react";
import { Form, Input } from "antd";
import { Col, Row } from "react-bootstrap";
import imagelogo1 from "../../../asset/image/BMW.png";
import imagelogo2 from "../../../asset/image/Mask group.png";
import imagelogo3 from "../../../asset/image/Mask group (1).png";
import imagelogo4 from "../../../asset/image/Mask group (2).png";
import imagelogo5 from "../../../asset/image/Mask group (3).png";
import imagelogo6 from "../../../asset/image/Mask group (4).png";
const ProductCollection = () => {
  const imageUrls = [
    imagelogo1,
    imagelogo2,
    imagelogo3,
    imagelogo4,
    imagelogo5,
    imagelogo6,
    imagelogo1,
    imagelogo2,
    imagelogo3,
    imagelogo4,
    imagelogo5,
    imagelogo6,
  ];

  return (
    <div>
      <div className="productCollection-Box1">Find Your Projects</div>
      <div className="productCollection-Box2">
        <div className="productCollection-Box3">
          <Form>
            <Row>
              <Col md={5}>
                <label className="productCollection-Txt">Vehicle Brand</label>
                <Form.Item>
                  <Input
                    size="large"
                    className="productCollection-Inpt1"
                    placeholder="Select A Brand"
                  ></Input>
                </Form.Item>
              </Col>
              <Col md={5}>
                <label className="productCollection-Txt">Vehicle Modal</label>
                <Form.Item>
                  <Input size="large" placeholder="Choose A Modal"></Input>
                </Form.Item>
              </Col>
              <Col md={2}>
                <div className="productCollection-Box4">
                  <button className="productCollection-Btn1">Search</button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <div className="productCollection-Box6">
        <div className="productCollection-Box7">
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className="productCollection-Img"
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default ProductCollection;
