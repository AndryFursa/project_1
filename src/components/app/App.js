import './App.css'
import Me from '../me/Me'
import Data from '../../data/Data'

function App() {
  const { name, years } = Data
  return (
    <div className="App">
      <Me name={name} years={years} />
      <header className="App-header">
        <button className="buttons"></button>
        <button className="buttons">Click me!</button>
        <button className="buttons">Click me!</button>
      </header>
    </div>
  )
}

export default App
