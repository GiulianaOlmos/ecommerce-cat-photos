import React, { useState, useEffect } from "react";
import ItemDetails from "../ItemDetails/ItemDetails";

function ItemDetailContainer(props) {
  const [detailItem, setDetailItem] = useState([]);

  let getIntems = new Promise((resolve, reject) => {
    let array = {
      price: 100,
      url: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg",
      description: "Corresponde a la foto de un gato muy beiio",
    };

    setTimeout(() => {
      resolve(array);
    }, 2000);
  });

  useEffect(() => {
    getIntems.then((data) => setDetailItem(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Inicio del Item Detail Component</h2>
      <ItemDetails details={detailItem} />
    </>
  );
}

export default ItemDetailContainer;
