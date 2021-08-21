import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/home";
import ItemDetail from "./Pages/ItemDetail/itemDetails";
import ItemCategory from "./Pages/ItemCategory/itemCategory";
import "../src/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetail />
          </Route>
          <Route exact path="/category/:id">
            <ItemCategory />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
