import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

function ItemList(props) {
  const [infoItem, setInfoItem] = useState([]);
  
  useEffect(() => setInfoItem(props.listItems), [props.listItems])

  return (
    <>{infoItem.length > 0 && infoItem.map((t) => <Item infoProd={t} />)}</>
  );
}

export default ItemList;
