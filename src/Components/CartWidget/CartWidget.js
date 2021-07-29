import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function CartWidget() {
  return (
    <a href="/">
      <ShoppingCartIcon fontSize="large" className="cartWidgetClass" />
    </a>
  );
}

export default CartWidget;
