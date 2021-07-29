import React from "react";

function ItemListContainer(props) {
  return (
    <div>
      <h2 className="greetingClass">{props.greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
