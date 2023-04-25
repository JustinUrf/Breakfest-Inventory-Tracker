import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm"


function NewItemForm(props) {

    function handleNewItemFormSubmission(event) {
      event.preventDefault();
      props.onNewItemCreation({
        name: event.target.name.value || "No Name",
        origin: event.target.location.value || "No Location",
        price:  event.target.price.value || "$10$",
        roast: event.target.roast.value || "No roast given",
        quantity: parseInt(event.target.quantity.value) || 10,
        id: v4(),
      });
    }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission} 
        buttonText="Add a new coffee"/>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation:PropTypes.func
};

export default NewItemForm;