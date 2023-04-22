import React from "react";
import PropTypes from 'prop-types';

function ItemDetail(props){
  const { item, onClickDelete } = props;

  return (
    <React.Fragment>
      <h1> Item Detail </h1>
      <h3>  {item.name} - {item.price}</h3>
      <hr/>
      <button onlick={ props.onClickingEdit }> Update Item</button>
      <button onClick={()=> onClickDelete(item.id) }> Delete this Item</button>
    </React.Fragment>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;