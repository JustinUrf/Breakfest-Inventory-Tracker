import React from 'react';

const mainInventoryList = [
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
  }
]

function InvetoryList(props) {
  return (
    <React.Fragment>
      <hr/>
      {mainInventoryList.map((item, index) =>
        <Item names={item.name}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
          quantity={item.quantity}
          key={index}/>)}
    </React.Fragment>
  )
}