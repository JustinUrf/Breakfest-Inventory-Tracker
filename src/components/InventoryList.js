import React from 'react';
import Item from "./Item";
import PropTypes from 'prop-types';

function InventoryList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.inventoryList.map((item, index) =>
        <Item name={item.name}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
          quantity={item.quantity}
          id={ticket.id}
          key={ticket.id}/>)}
    </React.Fragment>
  )
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onTicketSelection: PropTypes.func
}

export default InventoryList;
