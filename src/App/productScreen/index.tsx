import React from "react";
import Collections from "./component/block1";
import ProductSearch from "./component/block2";

function ProductScreen() {
  return (
    <>
      <div>
        <Collections />
      </div>
      <div>
        <ProductSearch />
      </div>
    </>
  );
}

export default ProductScreen;
