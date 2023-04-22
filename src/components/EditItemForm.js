import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditItemForm(props) {
  const { item } = props;
  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({name: event.target.name.value, origin: event.target.origin.value, roast: event.target.origin.value, quantity: origin.target.quantity.value, id: item.id})
  }
  return (
    <React.Fragment>
      <ReusableForm
          buttonText="Update item">
      </ReusableForm>
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditItemForm;