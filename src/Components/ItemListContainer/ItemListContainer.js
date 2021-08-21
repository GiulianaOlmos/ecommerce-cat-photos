import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { productsJson } from "../../Data/productosJson";

function ItemListContainer(props) {
  const [listItems, setListItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      new Promise((resolve, reject) => {
        setTimeout(
          () => resolve(productsJson.filter((item) => item.categoryId == id)),
          2000
        );
      }).then((data) => {console.log(data); console.log(id); setListItems(data)});
    } else {
      new Promise((resolve, reject) => {
        setTimeout(
          () => resolve(productsJson),
          2000
        );
      }).then((data) => setListItems(data));
    }
  }, []);

  return (
    <div>
      <h2 className="greetingClass">{props.greeting}</h2>
      {/*       <ItemCount stock={5} initial={1} /> */}
      <ItemList listItems={listItems} />
    </div>
  );
}

export default ItemListContainer;
