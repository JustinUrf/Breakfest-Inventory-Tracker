import React from 'react'

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemFormShowing: false,
      itemList: [
        {
          name: 'Blacker than black Coffee',
          origin: 'Peru',
          price: '$4.00',
          roast: 'dark',
          quantity: '130'
        }
      ],
      selectedItem: null
    }
  }

 render() {
  return (
    <React.Fragment>
      
    </React.Fragment>
  )
 }
}

export default InventoryControl;