import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Fetchdata1 from "./fetchdatafunction"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="fetchdata" element={ <Fetchdata1/> } />
      </Routes>
    </div>
  )
}

export default App