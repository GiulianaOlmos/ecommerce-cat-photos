import { blue } from "@material-ui/core/colors";
import React from "react";

function Item(props) {
  const itemStyle = {
    border: "2px solid blue",
    width: "300px",
    display: "inline-block",
    padding: "1% 1% 1% 1%"
  }

  return (
    <div style={itemStyle}>
        <h3>Holiwis</h3>
        <h6>{props.infoProd.id}</h6>
        <p>{props.infoProd.price}</p>
        <img src={props.infoProd.url} alt={props.infoProd.title} width="250" height="300"></img>
    </div>
  );
}

export default Item;
