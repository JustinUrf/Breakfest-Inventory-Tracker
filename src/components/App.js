import React from 'react';
import InventoryControl from './InventoryControl'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <InventoryControl />
      </Container>
    </React.Fragment>
  )
}

export default App;