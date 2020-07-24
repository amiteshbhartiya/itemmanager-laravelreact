import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { isEmpty, includes, pull } from 'lodash';



function ItemManager() {
    const [itemInventory, setItemInventory] = useState([]);
    const [itemCart, setItemCart] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [selectedItemToBuy, setSelectedItemToBuy] = useState("");
    const [itemToReturn, setItemToReturn] = useState("");
 
    function addMe(){
        if(!isEmpty(newItem) &&  !includes(itemInventory, newItem) && !includes(itemCart, newItem) ){
            setItemInventory(
                prevsItemInventory => prevsItemInventory.concat(newItem)
            )
            setNewItem("");
        }
    }

    function pickToCart(){ console.log('pickToCart'); console.log(includes(itemCart, selectedItemToBuy));
        if(!isEmpty(selectedItemToBuy) &&  !includes(itemCart, selectedItemToBuy)){
            setItemCart(
                prevSelectedItemToBuy => prevSelectedItemToBuy.concat(selectedItemToBuy)
            )
            pull(itemInventory, selectedItemToBuy);
        }
    }

    function removeFromCart(){
        if(!isEmpty(itemToReturn) &&  !includes(itemInventory, itemToReturn)){
            setItemInventory(
                prevSetItemInventory => prevSetItemInventory.concat(itemToReturn)
            )
            pull(itemCart, itemToReturn);
        }
    }

    function handleNewItem(event) { 
        
        const {name, value, type, checked} = event.target
        console.log(name);
        if(name == 'AddtoInventry') {
            setNewItem(value);

        }else if(name == 'itemInventory'){
            setSelectedItemToBuy(value)

        }else if(name == 'itemCart'){
            setItemToReturn(value)
        }
    }


    function addToPicked() {
        if(!isEmpty(newItem) &&  !includes(itemInventory, newItem)){
            setItemInventory(
                prevsItemInventory => prevsItemInventory.concat(newItem)
            )
            setNewItem("");
        }
    }

    return (
        <div>
            <Header/>
            <main role="main" className="container">
            <h1 className="mt-5">Item Management page</h1>
            <div className="main-content">
                <div className="form-inline">

                <input name="AddtoInventry" type="text" onChange={handleNewItem} value={newItem} className="form-control mb-2 mr-sm-2 w-25" id="inlineFormInputName2" placeholder="Enter Item Name and Click Add"/>

                <button type="button" className="btn btn-primary mb-2" onClick={addMe}> Submit</button>
                </div>
            
                <div className="row">
                <div className="col-5" style={{'marginTop': '30px'}}>
                
                    {/*
                    <select name="country" value={this.state.data.country}>
                        {this.countryData.map((e, key) => {
                            return <option key={key} value={e.value}>{e.name}</option>;
                        })}
                    </select>
                    */}
                    <div className="form-group">
                        <select name="itemInventory" onChange={handleNewItem} size= {itemInventory.length>5? itemInventory.length : 5} className="custom-select custom-select-lg mb-3" id="exampleFormControlSelect1">
                        {itemInventory.map(item => (
                                <option key ={item} id={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-1 align-self-center" style={{'textAlign': 'center'}}>
                    <div className="btn-group-vertical">
            
                        <button  type="button" className="btn btn-secondary" onClick={pickToCart} >{'>>'}</button>
                

                        <button type="button" className="btn btn-secondary" onClick={removeFromCart} >{'<<'}</button>
    
                    </div>
                    
                </div>
                <div className="col-5">
                                {/*
                <select name="country" value={this.state.data.country}>
                    {this.countryData.map((e, key) => {
                        return <option key={key} value={e.value}>{e.name}</option>;
                    })}
                </select>
                */}
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Picked Items</label>
                    <select onChange={handleNewItem}  name="itemCart"  size={itemCart.length>5?itemCart.length:5} className="custom-select custom-select-lg mb-3" id="exampleFormControlSelect1">
                    {itemCart.map(item => (
                            <option key ={item} id={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            </div>
        </div>
            </main>
            <Footer/>
        </div>
    );
}

export default ItemManager;

if (document.getElementById('item-maanger-app')) {
    ReactDOM.render(<ItemManager />, document.getElementById('item-maanger-app'));
}
