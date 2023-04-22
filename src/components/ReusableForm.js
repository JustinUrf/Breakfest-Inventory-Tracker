import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
          <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;