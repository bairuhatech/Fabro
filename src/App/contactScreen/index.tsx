import React from "react";
import { Form,Input,Button} from "antd";
import { Col, Row } from "react-bootstrap";
import NewBoxImage1 from "../../asset/image/div.text-with-icons__icon-wrapper_margin.png";
import NewBoxImage2 from "../../asset/image/div.text-with-icons__icon-wrapper.png";
import NewBoxImage3 from "../../asset/image/div.text-with-icons__icon-wrapper (1).png";
import NewBoxImage4 from "../../asset/image/div.text-with-icons__icon-wrapper (2).png";

import "./styles.scss";

function ContactScreen() {
  const { TextArea } = Input;
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Change:", e.target.value);
  };
  const newData = [
    {
      image: NewBoxImage1,
      text: "Free Delivery",
      text1: "No additional delivery cos",
    },
    {
      image: NewBoxImage2,
      text: "5-Day Replacement (T&C Apply) ",
      text1: "No additional delivery cos",
    },
    {
      image: NewBoxImage3,
      text: "Customer Support",
      text1: "Problems? Were here to help",
    },
    {
      image: NewBoxImage4,
      text: "Secure Payment",
      text1: "Safe and secure transactions",
    },
  ];
  return (
    <div className="contactScreen-Box1">
      <div className="contactScreen-Box2">
        <div className="contactScreen-Box3">
          <div className="contactScreen-Txt1">Contact us for enquieris</div>
          <br />
          <Form>
            <Row>
              <Col md={6}>
                <Col md={12}>
                  <div>
                    <label className="contactScreen-Txt2">Name</label>
                    <Form.Item>
                      <Input
                        size="large"
                        className="contactScreen-Txt3"
                      ></Input>
                    </Form.Item>
                  </div>
                </Col>
                <Col md={12}>
                  <div>
                    <label className="contactScreen-Txt2">PhoneNumber</label>
                    <Form.Item>
                      <Input
                        size="large"
                        className="contactScreen-Txt3"
                      ></Input>
                    </Form.Item>
                  </div>
                </Col>
                <Col md={12}>
                  <div>
                    <label className="contactScreen-Txt2">Email</label>
                    <Form.Item>
                      <Input
                        size="large"
                        className="contactScreen-Txt3"
                      ></Input>
                    </Form.Item>
                  </div>
                </Col>
                <Col md={12}>
                  <div>
                    <label className="contactScreen-Txt2">Product Type</label>
                    <Form.Item>
                      <Input
                        size="large"
                        className="contactScreen-Txt3"
                      ></Input>
                    </Form.Item>
                  </div>
                </Col>
              </Col>

              <Col md={6}>
                <Col md={12}>
                  <div>
                    <label className="contactScreen-Txt2">Message</label>
                    <TextArea
                      onChange={onChange}
                      className="contactScreen-Txt3"
                      rows={11}
                      style={{ resize: "none" }}
                    ></TextArea>
                  </div>
                  <br />

                  <Col md={12}>
                    <button className="contactScreen-Btn1">Submit</button>
                  </Col>
                </Col>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <div className="contactScreen-Box4">
        <Row className="align-items-center h-100 g-0">
          {newData.map((item, index) => (
            <Col md={3} key={index}>
              <div className="contactScreen-Box5">
                <div className="contactScreen-Box6">
                  <img src={item.image} />
                </div>
                <p className="contactScreen-Txt4">
                  {item.text}
                  <br />
                  {item.text1}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ContactScreen;
