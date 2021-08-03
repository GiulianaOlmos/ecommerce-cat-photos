import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {

  return (
    <div>
      <h2 className="greetingClass">{props.greeting}</h2>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemListContainer;
