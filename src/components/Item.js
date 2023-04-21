import React from 'react';
import PropTypes from "prop-types"

function Item(props) {
  return (
    <React.Fragment>
      <div onClick ={() => props.whenItemClicked(props.id)}>
        <h1>Name: {props.name}</h1>
        <ul>
          <li>{props.origin}</li>
          <li>{props.price}</li>
          <li>{props.roast}</li>
          <li>Quantity: {props.quantity}</li>
        </ul>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string, 
  whenItemClicked: PropTypes.func,
}

export default Item;