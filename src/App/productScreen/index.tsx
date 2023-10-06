import React from "react";
import "./styles.scss";
import FindYourProjuct from "./component/block1";
import ProductCollection from "./component/block2";

function ProductScreen() {
  return (
    <div className="productScreen-Box1">
      <div className="productScreen-Box2">
        <div className="productScreen-Box3">
          <FindYourProjuct />
        </div>
      </div>
      <div className="productScreen-Box4">
        <div className="productScreen-Box5">
          <ProductCollection />
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
