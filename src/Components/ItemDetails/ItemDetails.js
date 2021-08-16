import React from "react";

function ItemDetails(item) {
  return (
    <div>
        <h3>El Titulo</h3>
        <p>{item.details.price}</p>
        <p>{item.details.description}</p>
        <img src={item.details.url} alt={item.details.description} width="250" height="300"></img>
    </div>
  );
}

export default ItemDetails;