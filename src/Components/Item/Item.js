import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/item/${props.infoProd.id}`}>
            ver detalle
        </Link>
    </div>
  );
}

export default Item;
