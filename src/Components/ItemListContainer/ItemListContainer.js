import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


function ItemListContainer(props) {

  return (
    <div>
      <h2 className="greetingClass">{props.greeting}</h2>
      <ItemCount stock={5} initial={1} />
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
