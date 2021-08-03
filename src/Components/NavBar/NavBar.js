import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import cat from '../../Assets/cat.svg';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
    return (
        <Paper className="paperClass">
            <a className="aClass" href="/">
                <div className="divClass">
                    <img className="imgClass" src={cat} alt="logo de gato" />
                    <p>Cat Photos Shop</p>
                </div>
            </a>
            <Tabs className="tabsClass" value="1">
                <Tab label="Sobre Nosotros" value="1"/>
                <Tab label="Productos" value="2"/>
                <Tab label="Contacto" value="3" />
            </Tabs>
            <CartWidget />
        </Paper>
    )
}

export default NavBar;