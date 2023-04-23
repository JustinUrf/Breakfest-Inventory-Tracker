import React from "react";
import PropTypes from 'prop-types';

const ItemDetail = (props) => {
  const { item, onClickDelete, onClickEdit, onClickUnitSold } = props;

  return (
    <React.Fragment>
      <h1> Item Detail </h1>
      <h3>  {item.name} - {item.price} - Quantity : {item.quantity}</h3>
      <hr/>
      <button onClick={ onClickUnitSold }>Sell a Coffee</button>
      <button onClick={ onClickEdit }> Update Item </button>
      <button onClick={()=> onClickDelete(item.id)}> Delete this Item</button>
    </React.Fragment>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickUnitSold: PropTypes.func
};

export default ItemDetail;