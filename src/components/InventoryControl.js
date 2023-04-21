import React from 'react'

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemFormShowing: false,
      selectedItem: null
    }
  }

  getItemById = (id, list = this.state.itemList) => {
    return list.filter(item => item.id === id)[0];
  };

  handleClickBackToList = () => {
    this.setState(() => ({
      selectedItem: null,
    }))
  }

 render() {
  return (
    <React.Fragment>

    </React.Fragment>
  )
 }
}

export default InventoryControl;