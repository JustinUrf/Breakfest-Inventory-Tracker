import React from 'react';
import InventoryList from './InventoryList';
import NewItemForm from './NewItemForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false,
      newItemFormShowing: false,
      selectedItem: null
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


 render() {
  let currentlyVisableState = null;
  let buttonText = null;
  if (this.state.formVisableOnPage) {
    currentlyVisableState = <NewItemForm />
    buttonTxt = "return to Inventory List"
  } else {
    currentlyVisableState = <InventoryList />
    buttonText = "Add Item"
  }
  return (
    <React.Fragment>
      {currentlyVisableState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  )
 }
}

export default InventoryControl;