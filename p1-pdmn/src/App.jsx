import React from 'react'

import Busca from './components/Busca'
import LocalidadeLista from './components/LocalidadeLista';

class App extends React.Component {
  localidades = [
    {
      cep: '04094-050',
      logradouro: 'Avenida Pedro Álvares Cabral',
      bairro: 'Parque Ibirapuera',
      localidade: 'São Paulo',
      uf: 'SP',
    },
    {
      cep: '55592-970',
      logradouro: 'Rua dos Navegantes',
      bairro: 'Vila de Porto de Galinhas',
      localidade: 'Ipojuca',
      uf: 'PE',
    }
  ];

  render() {
    return (
      <main>
        <Busca dica='Digite um CEP' />
        <LocalidadeLista localidades={this.localidades} />
      </main>
    )
  }
}

export default App