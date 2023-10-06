import React from "react";
import "./styles.scss";
import FindYourProjuct from "./findYourProjuct";
import ProductCollection from "./productCollection";
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
