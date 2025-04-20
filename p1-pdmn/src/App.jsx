import React from 'react'

import Busca from './components/Busca'
import LocalidadeLista from './components/LocalidadeLista';
import viaCep from './utils/viaCep';

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

  aoRealizarBusca = (termo) => {
    if (termo === '') {
      alert('Parece que você esqueceu de digitar.\nDigite um CEP para continuar.')
    } else {
      // Validações retiradas da documentação https://viacep.com.br/exemplo/javascript/
      let cepFormatado = termo.replace(/\D/g, '');
      let validaCEP = /^[0-9]{8}$/;

      if (validaCEP.test(cepFormatado)) {
        viaCep.get(`/${cepFormatado}/json/`).then(resultado => {
          if (resultado.data.erro) {
            alert('Este CEP não foi encontrado.\nTente outro CEP.')
          } else {
            console.log('chamada ViaCEP: ', resultado.data)
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
        <LocalidadeLista localidades={this.localidades} />
      </main>
    )
  }
}

export default App