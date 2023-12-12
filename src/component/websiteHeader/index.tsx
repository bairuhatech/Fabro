import React, { Component, ChangeEvent } from "react";
import AntdDrawer from "antd/es/drawer";
import "./styles.scss";
import logos from "../../asset/image/logos.png";
import cart from "../../asset/image/Group 15.png";

interface WebsiteHeaderState {
  open: boolean;
  placement: "top" | "right" | "bottom" | "left";
}

class WebsiteHeader extends Component<{}, WebsiteHeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      open: false,
      placement: "left",
    };
  }

  showDrawer = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      placement: e.target.value as WebsiteHeaderState["placement"],
    });
  };

  render() {
    return (
      <div className="websiteHeader-Box1">
        <div className="websiteHeader-Box2">
          <img className="logo" src={logos} alt="" />
        </div>
        <div className="websiteHeader-Box3">
          <div className="websiteHeader-Box4">
            <div className="websiteHeader-Txt1">HOME</div>
            <div className="websiteHeader-Txt1">ABOUT</div>
            <div className="websiteHeader-Txt1">PRODUCTS</div>
            <div className="websiteHeader-Txt1">CONTACT US</div>
            <div className="cart-count">
              <img
                src={cart}
                style={{
                  width: "41.1px",
                  height: "31.1px",
                  borderRadius: "22.75px",
                }}
                alt="Cart"
              />
              CART
            </div>
          </div>
        </div>
        <div className="abcd" onClick={() => this.showDrawer()}></div>
        <AntdDrawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.open}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </AntdDrawer>
      </div>
    );
  }
}

export default WebsiteHeader;
