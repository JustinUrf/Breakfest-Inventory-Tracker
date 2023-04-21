import React from 'react';
import InventoryControl from './InventoryControl';
import Item from "./Item";

const mainInventoryList = [

]

function InventoryList(props) {
  return (
    <React.Fragment>
      <hr/>
      {mainInventoryList.map((item, index) =>
        <Item name={item.name}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
          quantity={item.quantity}
          key={index}/>)}
    </React.Fragment>
  )
}
export default InventoryList;
