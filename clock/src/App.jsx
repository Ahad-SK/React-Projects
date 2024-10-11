import Heading from "./Heading"
import Statement from "./statement"
import Time from "./time"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <center>
      <div className="Heading">
  <Heading/>
  </div>
  <div className="Statement">
  <Statement/>
  </div>
  <div className="Time">
  <Time/>
  </div>
   </center>
  )
}

export default App
