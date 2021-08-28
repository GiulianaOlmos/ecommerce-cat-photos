import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";


function ItemDetails(item) {
  const [cantProd, setCantProd] = useState(0);

  //Estado para visualizar el futuro componente card
  const [visibilidad, setVisibilidad] = useState(false)


  const onAdd = (cantidad) => {
    console.log(`Se agrego al carrito ${cantidad}`);
    setCantProd(cantidad);
  };

  const comprar = () => {
    console.log(`Se compro el producto en numero ${cantProd}`);
    setVisibilidad(true)
  };

  return (
    <div>
      {/* Ejemplo del componente que aparece */}
      {visibilidad ? <CartWidget />: null}
      <h3>El Titulo</h3>
      <p>{item.details.price}</p>
      <p>{item.details.description}</p>
      <img
        src={item.details.url}
        alt={item.details.description}
        width="250"
        height="300"
      ></img>
      <ItemCount onAdd={onAdd} data={item.details} />
        <Button
          onClick={() => comprar()}
          disabled={cantProd == 0}
          variant="contained"
          color="primary"
        >
          Terminar mi compra
        </Button>
      <Link to={`/`}>Volver al listado</Link>
    </div>
  );
}

export default ItemDetails;
