import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetails from "../ItemDetails/ItemDetails";
import { productsJson } from "../../Data/productosJson";

function ItemDetailContainer(props) {
  const [detailItem, setDetailItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(productsJson.filter((item) => item.id == id)),
        2000
      );
    }).then((data) => setDetailItem(data[0]));
  }, [id]);

  return (
    <>
      <h2>Inicio del Item Detail Component</h2>
      <ItemDetails details={detailItem} />
    </>
  );
}

export default ItemDetailContainer;
