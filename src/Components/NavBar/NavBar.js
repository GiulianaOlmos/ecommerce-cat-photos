import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import cat from "../../Assets/cat.svg";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <Paper className="paperClass">
      <a className="aClass" href="/">
        <div className="divClass">
          <img className="imgClass" src={cat} alt="logo de gato" />
          <p>Cat Photos Shop</p>
        </div>
      </a>
      <Tabs className="tabsClass">
        <Link to={`/category/1`}>
          <Tab label="Categoria 1" />
        </Link>
        <Link to={`/category/2`}>
          <Tab label="Categoria 2" />
        </Link>
        <Link to={`/category/3`}>
          <Tab label="Categoria 3"  />
        </Link>
      </Tabs>
      <CartWidget />
    </Paper>
  );
}

export default NavBar;
