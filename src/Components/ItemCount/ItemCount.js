import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function ItemCount(props) {
  const [count, setCount] = useState(0);

  const sumar = () => {
    console.log(`el stock es ${props.data.stock}`);
    if (count < props.data.stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const itemCountStyle = {
    border: "1px solid black",
    width: "250px",
    padding: "10px 40px",
  };

  const buttonGroup = {
    display: "block",
    marginBottom: "4px",
  };

  return (
    <div style={itemCountStyle}>
      <h1>{props.data.title}</h1>
      <h3>{count}</h3>
      <ButtonGroup
        style={buttonGroup}
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => sumar()}
          variant="outlined"
          color="primary"
          href="#outlined-buttons"
          disabled={props.data.stock == 0}
        >
          sumar
        </Button>
        <Button
          onClick={() => restar()}
          variant="outlined"
          color="primary"
          href="#outlined-buttons"
        >
          Restar
        </Button>
      </ButtonGroup>
      <Button
        disabled={count == 0}
        onClick={() => props.onAdd(count)}
        variant="contained"
        color="primary"
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
