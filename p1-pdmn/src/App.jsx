import React from 'react'

import Busca from './components/Busca'
import LocalidadeLista from './components/LocalidadeLista';
import viaCep from './utils/viaCep';

class App extends React.Component {
  state = {
    localidades: []
  }

  aoRealizarBusca = (termo) => {
    if (termo === '') {
      alert('Parece que você esqueceu de digitar.\nDigite um CEP para continuar.')
    } else {
      // Validações retiradas da documentação https://viacep.com.br/exemplo/javascript/
      const cepFormatado = termo.replace(/\D/g, '');
      const validaCEP = /^[0-9]{8}$/;

      if (validaCEP.test(cepFormatado)) {
        viaCep.get(`/${cepFormatado}/json/`).then(resultado => {
          if (resultado.data.erro) {
            alert('Este CEP não foi encontrado.\nTente outro CEP.')
          } else {
            this.setState({ localidades: [resultado.data, ...this.state.localidades] })
          }
        }).catch(erro => {
          alert('Não foi possível consultar este CEP. Verifique se este CEP é válido e tente novamente.')
          console.error(erro.toJSON())
        })
      } else {
        alert('Formato de CEP inválido.\nDigite um CEP válido para continuar.')
      }
    }
  }

  render() {
    return (
      <main>
        <Busca dica='Digite um CEP' aoRealizarBusca={this.aoRealizarBusca} />
        <LocalidadeLista localidades={this.state.localidades} />
      </main>
    )
  }
}

export default App