import React from 'react'

import Busca from './components/Busca'

class App extends React.Component {
  render() {
    return (
      <Busca dica='Digite um CEP' />
    )
  }
}

export default App