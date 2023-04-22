import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm"


function NewItemForm(props) {

    function handleNewItemFormSubmission(event) {
      event.preventDefault();
      console.log("This button is working right")
      props.onNewItemCreation({
        name: event.target.name.value,
        origin: event.target.origin,
        roast: event.target.roast,
        quantity: event.target.quantity,
        id: v4(),
      });
    }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission} buttonText="Add a new coffee"/>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation:PropTypes.func
};

export default NewItemForm;