import React from 'react';
import InventoryList from './InventoryList';
import NewItemForm from './NewItemForm';
import { v4 } from 'uuid';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';


class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false,
      mainItemList: [  
        {
        name: 'Blacker than black Coffee',
        origin: 'Peru',
        price: '$4.00',
        roast: 'dark',
        quantity: '130'
      },
      ]
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisableOnPage: false,
        selectedItem: null,
        editing: false
      })
    } else {
        this.setState(prevState => ({
          formVisableOnPage: !prevState.formVisableOnPage
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
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem });
  }

  handleDeleteItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(ticket => ticket.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList.filter(item => item.id !== this.state.selectedItem.id).concat(itemToEdit)
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem:null
    });
  }


 render() {
  let currentlyVisableState = null;
  let buttonText = null;

  if (this.state.selectedItem != null) {
    currentlyVisableState = <ItemDetail item = {this.state.selectedItem} onClickDelete = {this.handleDeleteItem} onClickingEdit = {this.handleEditClick}/>
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