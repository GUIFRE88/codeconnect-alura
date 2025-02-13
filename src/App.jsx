import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './components/BarraDePesquisa'
import Card from './components/Card'
import Filtro from './components/Filtro'
import Sidebar from './components/Sidebar'

function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(response => response.json())
      .then(data => setDados(data))
  }, [])

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card 
                id={item.id}
                imagemUrl={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
/>
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App
