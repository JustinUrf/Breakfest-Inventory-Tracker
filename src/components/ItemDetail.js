import React from "react";

function ItemDetail(props){

  const { item } = props;
  return (
    <React.Fragment>
      <h1> Item Detail </h1>
      <h3>  {item.name} </h3>
      <hr/>
    </React.Fragment>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object
}

export default ItemDetail;