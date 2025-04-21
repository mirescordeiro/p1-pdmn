import React from 'react'

import { Chart } from 'primereact/chart';

const LocalidadeGrafico = ({ estados }) => {
  const mapeamentoEstados = estados.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {})
  const siglas = Object.keys(mapeamentoEstados)
  const locaisPorEstado = Object.values(mapeamentoEstados)

  // Paleta verde do tema 'primereact/resources/themes/lara-light-teal/theme.css'
  const cores = ['#f4fcf7', '#caf1d8', 'a0e6ba', '#76db9b', '#4cd07d', '#22c55e', '#1da750', '#188a42', '#136c34', '#0e4f26',]

  return (
    <div className="flex align-items-center justify-content-center" >
      <Chart
        type="pie"
        className="w-full"
        data={{ labels: siglas, datasets: [{ data: locaisPorEstado, backgroundColor: cores.reverse() }] }}
      />
    </div >
  )
}
export default LocalidadeGrafico