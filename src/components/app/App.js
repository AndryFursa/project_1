import './App.css'
import Me from '../me/Me'
import Data from '../../data/Data'
import Button from '../Button/Button'

// function changeTextButton(text) {
//   const newTextButton = text + '12'
//   return newTextButton
// }
// console.log(changeTextButton)

function App() {
  const { name, years } = Data
  return (
    <div className="App">
      <Me name={name} years={years} />
      <Button />
      <Button />
      <Button />
      <header className="App-header"></header>
    </div>
  )
}

export default App
