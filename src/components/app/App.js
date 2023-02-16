import './App.css'
import Me from '../Me/Me'
import Data from '../../data/Data'

// function changeTextButton(text) {
//   const newTextButton = text + '12'
//   return newTextButton
// }
// console.log(changeTextButton)

function App() {
  const { name, years, textButton } = Data
  return (
    <div className="App">
      <Me name={name} years={years} textButton={textButton} />

      <header className="App-header"></header>
    </div>
  )
}

export default App
