import React, {useState, useEffect} from 'react'
import { isEmpty, includes, pull, map, forEach } from 'lodash';
import Axios from 'axios';

const MainC = () => {
    const [itemInventory, setItemInventory] = useState([]);
    const [itemCart, setItemCart] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [selectedItemToBuy, setSelectedItemToBuy] = useState("");
    const [itemToReturn, setItemToReturn] = useState("");
 
    function addToInventry(){
        if(!isEmpty(newItem) &&  !includes(itemInventory, newItem) && !includes(itemCart, newItem) ){
            setItemInventory(
                prevsItemInventory => prevsItemInventory.concat(newItem)
            )                    
            createInventryToDB(newItem, false);
            setNewItem("");
        }
    }

    function pickToCart(){ console.log('pickToCart'); console.log(includes(itemCart, selectedItemToBuy));
        if(!isEmpty(selectedItemToBuy) &&  !includes(itemCart, selectedItemToBuy)){
            setItemCart(
                prevSelectedItemToBuy => prevSelectedItemToBuy.concat(selectedItemToBuy)
            )
            pull(itemInventory, selectedItemToBuy);
            updateInventryToDB(selectedItemToBuy, true);
        }
    }

    function removeFromCart(){
        if(!isEmpty(itemToReturn) &&  !includes(itemInventory, itemToReturn)){
            setItemInventory(
                prevSetItemInventory => prevSetItemInventory.concat(itemToReturn)
            )
            pull(itemCart, itemToReturn);
            updateInventryToDB(itemToReturn, false);
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


    /*function addToPicked() {
        if(!isEmpty(newItem) &&  !includes(itemInventory, newItem)){
            setItemInventory(
                prevsItemInventory => prevsItemInventory.concat(newItem)
            )
            setNewItem("");
        }
    }*/
    function createInventryToDB(name, status){
        Axios.post('/api/items', {
            name: name,
            is_picked:status
        })
        .then(response => {
            console.log('from handle submit', response);
        })
       // .catch(err => console.log('[On Create]There was an error:' + err))
    }
    
    function updateInventryToDB(name, status){ 
        let url = "/api/items/"+name;
        //console.log('url--'+name)
        Axios.put(url, {
            is_picked:status
        })
        .then(response => {
            console.log('from handle submit', response);
        })
       // .catch(err => console.log('[On Update]There was an error:' + err))
    }

    useEffect(() => {
        fetch('http://localhost:8001/api/items')
        .then((res)=> res.json())
        .then(
            (results) => { //console.log( map(results.data, 'name'));
                //setIsLoaded(true);
                //console.log(!isEmpty(results.data));

                if(results.hasOwnProperty('data') && !isEmpty(results.data) ){
                    let available =[], notAvailable=[]
                    //let data = map(results.data, 'name')
                    forEach(results.data, function(value) {
                        if(value.hasOwnProperty('name') && value.hasOwnProperty('is_picked')){
                            if(value.is_picked){
                                notAvailable.push(value.name.trim())
                            }else{
                                available.push(value.name.trim())
                            }
                        }
                    });

                    setItemInventory(available);
                    setItemCart(notAvailable);
                }
            },
            (error) => {
                //setIsLoaded(true);
                //setError(error);
            }
        );
    
    },[])

    return(
        <main role="main" className="container">
            <h1 className="mt-5">Item Management Page</h1>
                <div className="main-content">
                    <div className="form-inline">

                    <input name="AddtoInventry" type="text" onChange={handleNewItem} value={newItem} className="form-control mb-2 mr-sm-2 w-25" id="inlineFormInputName2" placeholder="Enter Item Name and Click Add"/>

                    <button type="button" className="btn btn-primary mb-2" onClick={addToInventry}> Submit</button>
                    </div> 
                    <div className="row">
                    <div className="col-5" style={{'marginTop': '30px'}}>
                        <div className="form-group">
                            <select name="itemInventory" onChange={handleNewItem} size= {itemInventory.length>5? (itemInventory.length<15?itemInventory.length:15) : 5} className="custom-select custom-select-lg mb-3" id="exampleFormControlSelect1">
                            {itemInventory.map(item => (
                                    <option key ={item} id={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-1 align-self-center" style={{'textAlign': 'center'}}>
                        <div className="btn-group-vertical">
                
                            <button  type="button" className="btn btn-primary" onClick={pickToCart} >{'>>'}</button>
                    

                            <button type="button" className="btn btn-primary" onClick={removeFromCart} >{'<<'}</button>
        
                        </div>
                        
                    </div>
                    <div className="col-5">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1" style={{'fontSize':'30px'}}>Picked Items</label>
                        <select onChange={handleNewItem}  name="itemCart"  size={itemCart.length>5?(itemCart.length<15?itemCart.length:15):5} className="custom-select custom-select-lg mb-3" id="exampleFormControlSelect1">
                        {itemCart.map(item => (
                                <option key ={item} id={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
                </div>
                </div>
            </main>
   );
}

export default MainC