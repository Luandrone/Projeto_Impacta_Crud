import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css'
import Filamentos from "./pages/filamentos";
import Adicionar from "./pages/adicionar";
import Atualizar from "./pages/atualizar";

function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filamentos/>}/>
          <Route path="/adicionar" element={<Adicionar/>}/>
          <Route path="/atualizar" element={<Atualizar/>}/>
        </Routes>
          
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
