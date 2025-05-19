import './App.css'
import { Home } from './pages/Home.jsx'
import { EtiquetaProvider } from "./context/EtiquetaProvider.jsx"

function App() {

  return (
    <EtiquetaProvider>
      <Home />
    </EtiquetaProvider>
  )
}

export default App
