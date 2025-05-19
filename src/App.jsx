import './App.css'
import { HomeP } from './pages/HomeP.jsx'
import { EtiquetaProvider } from "./context/EtiquetaProvider.jsx"

function App() {

  return (
    <EtiquetaProvider>
      <HomeP />
    </EtiquetaProvider>
  )
}

export default App
