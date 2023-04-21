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


 render() {
  let currentlyVisableState = null;
  if (this.state.formVisableOnPage) {
    currentlyVisableState = <NewItemForm />
  } else {
    currentlyVisableState = <InventoryList />
  }
  return (
    <React.Fragment>
      {currentlyVisableState}
    </React.Fragment>
  )
 }
}

export default InventoryControl;