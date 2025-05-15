
import './App.css'
import { Home } from './pages/Home'
import { PaginaPrueba } from './pruebas/PaginaPrueba'
import { EtiquetaProvider } from "./context/EtiquetaProvider.jsx"

function App() {

  return (
    <EtiquetaProvider>
      <Home />
    </EtiquetaProvider>
  )
}

export default App
