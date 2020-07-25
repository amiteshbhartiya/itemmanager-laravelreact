import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { isEmpty, includes, pull } from 'lodash';



function ItemManager() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default ItemManager;

if (document.getElementById('item-maanger-app')) {
    ReactDOM.render(<ItemManager />, document.getElementById('item-maanger-app'));
}
