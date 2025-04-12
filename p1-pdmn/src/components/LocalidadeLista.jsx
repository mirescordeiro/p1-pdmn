import React from 'react'

import { Card } from 'primereact/card';

const LocalidadeLista = ({ localidades }) => {
  return (
    localidades.map((local, index) => (
      <Card key={index} className='text-center mt-4'>
        <p>{local.cep}</p>
        <p>{local.logradouro}</p>
        <p>{local.bairro}</p>
        <p>{local.localidade} - {local.uf}</p>
      </Card>
    ))
  )
}

export default LocalidadeLista