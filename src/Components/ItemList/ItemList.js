import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

function ItemList() {
  const [infoItem, setInfoItem] = useState([]);

  let task = new Promise((resolve, reject) => {
    let array = [
      {
        id: "1",
        title: "Foto Gato 1",
        price: 100,
        url: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg",
      },
      {
        id: "2",
        title: "Foto Gato 2",
        price: 200,
        url: "https://www.hola.com/imagenes/estar-bien/20201027177994/cosas-asustan-gatos-gt/0-882-234/gato-m.jpg",
      },
      {
        id: "3",
        title: "Foto Gato 3",
        price: 300,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RTgkk6XmX3fYdtHjXxCJXocOPrhifIKiGQ&usqp=CAU",
      },
    ];

    setTimeout(() => {
      resolve(array);
    }, 2000);
  });

  useEffect(() => {
      task.then(data => setInfoItem(data))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>{infoItem.length > 0 && infoItem.map((t) => <Item infoProd={t} />)}</>
  );
}

export default ItemList;
