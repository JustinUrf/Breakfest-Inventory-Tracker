import React from 'react';
import InventoryList from './InventoryList';
import NewItemForm from './NewItemForm';
import { v4 } from 'uuid';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [  
        {
        name: 'Blacker than black Coffee',
        origin: 'Peru',
        price: '$4.00',
        roast: 'dark',
        quantity: '130'
      },
      {
        name: 'Nice Tan Coffee',
        origin: 'Columbia',
        price: '$6.00',
        roast: 'medium',
        quantity: '50'
      },
      {
        name: 'Premium Sunshine',
        origin: 'Mississi',
        price: '$19.00',
        roast: 'light',
        quantity: '75'
      }]
    };
    this.handleClick = this.handleClick.bind(this);
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
    buttonText = "return to Inventory List"
  } else {
    currentlyVisableState = <InventoryList inventoryList={this.state.mainItemList} />
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