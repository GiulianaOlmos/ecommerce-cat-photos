import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/home";
import ItemDetail from "./Pages/ItemDetail/itemDetails";
import ItemCategory from "./Pages/ItemCategory/itemCategory";
import "../src/App.css";
import { CartContext } from "../src/Context/cartContext";
import { useState } from "react";


function App() {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/item/:id">
            <CartContext.Provider value={{ quantity, setQuantity }}>
              <ItemDetail />
            </CartContext.Provider>
          </Route>
          <Route exact path="/category/:id">
            <ItemCategory />
          </Route>
          <Route exact path="/cart">
            <ItemCategory />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
