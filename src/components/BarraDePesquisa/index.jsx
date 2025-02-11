import { useState } from 'react'
import './styles.css'

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState('')

  return (
    <input 
      type="search" 
      className="barra-pesquisa" 
      placeholder="Digite o que você procura" 
      value={termoPesquisa}
      onChange={(e) => setTermoPesquisa(e.target.value)}
    />
  )
}