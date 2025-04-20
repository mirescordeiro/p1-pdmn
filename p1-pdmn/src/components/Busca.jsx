import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {
  state = {
    termoDeBusca: '',
  }

  aoAlterarBusca = (event) => {
    this.setState({ termoDeBusca: event.target.value })
  }

  aoEnviar = (event) => {
    event.preventDefault()
    this.props.aoRealizarBusca(this.state.termoDeBusca)
    this.setState({ termoDeBusca: '' })
  }

  render() {
    return (
      <form onSubmit={this.aoEnviar}>
        <div className='flex flex-column'>
          <InputText
            className='w-full'
            placeholder={this.props.dica}
            onChange={this.aoAlterarBusca}
            value={this.state.termoDeBusca}
          />
          <Button label='OK' className='mt-2' />
        </div>
      </form>
    )
  }
}
