import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Fetchdata from "./fetchdata"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="fetchdata" element={ <Fetchdata/> } />
      </Routes>
    </div>
  )
}

export default App