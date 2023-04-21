import React from "react";

function NewItemForm(props) {

    function handleNewItemFormSubmission(event) {
      event.preventDefault();
      console.log(event.target.name.value);
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
          roast='Roast'
          quantity='Quantity'/>

      </form>
    </React.Fragment>
  )
}

export default NewItemForm;