import './App.css'
import BarraDePesquisa from './components/BarraDePesquisa'
import Filtro from './components/Filtro'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
      </div>
    </div>
  )
}

export default App
