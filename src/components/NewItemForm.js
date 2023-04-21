import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";


function NewItemForm(props) {

    function handleNewItemFormSubmission(event) {
      event.preventDefault();
      props.onNewItemCreation({
        name: event.target.name.value,
        origin: event.target.origin,
        roast: event.target.roast,
        quantity: event.target.quantity,
        id: v4()
      })
    }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Pair names'/>
          <input
          type='text'
          origin='origin'
          placeholderr='Origin'/>
          <input
          type='text'
          price='price'
          placeholder='Price'/>
          <input
          type='text'
          roast='roast'
          placeholder='Roast'/>
          <input
          type='text'
          quantity='quantity'
          placeholder='Quantity'/>
      </form>
    </React.Fragment>
  )
}

NewItemForm.propTypes = {
  onNewItemCreation:PropTypes.func
};

export default NewItemForm;