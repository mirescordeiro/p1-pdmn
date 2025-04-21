import React from 'react'

import Busca from './components/Busca'
import LocalidadeLista from './components/LocalidadeLista';
import LocalidadeGrafico from './components/LocalidadeGrafico';
import viaCep from './utils/viaCep';

class App extends React.Component {
  state = {
    localidades: [],
    estados: [],
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
            this.setState({
              localidades: [resultado.data, ...this.state.localidades],
              estados: [resultado.data, ...this.state.localidades].map((local) => local.uf)
            })
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
      <main className='grid' >
        <div className='col-6'>
          <Busca dica='Digite um CEP' aoRealizarBusca={this.aoRealizarBusca} />
          <LocalidadeLista localidades={this.state.localidades} />
        </div>
        <div className='col-6'>
          <LocalidadeGrafico estados={this.state.estados} />
        </div>
      </main>
    )
  }
}

export default App