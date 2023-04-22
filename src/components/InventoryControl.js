import React from 'react';
import InventoryList from './InventoryList';
import NewItemForm from './NewItemForm';
import { v4 } from 'uuid';
import ItemDetail from './ItemDetail';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
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
        origin: 'Mississipi',
        price: '$19.00',
        roast: 'light',
        quantity: '75'
      }]
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisableOnPage: false,
        selectedItem: null
      })
    } else {
      this.setState(prevState => ({
        formVisableOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisableOnPage: false });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id[0]);
    this.setState({selectedItem: selectedItem });
  }


 render() {
  let currentlyVisableState = null;
  let buttonText = null;

  if (this.state.selectedItem != null) {
    currentlyVisableState = <ItemDetail item = {this.state.selectedItem} />
    buttonText = "Return Item List"
  }
  else if (this.state.formVisableOnPage) {
    currentlyVisableState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
    buttonText = "return to Inventory List"
  } else {
    currentlyVisableState = <InventoryList inventoryList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem} />
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