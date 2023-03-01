import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TodoList from './todoList/TodoList.jsx'
import './App.css'
import ColorBox from './colorbox/ColorBox';

function App() {
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide(!hide);
  }
  return (
    <div className="App">
      <button onClick={handleHide}>{hide ? "Hide" : "Show"}</button>
     {hide && <TodoList />}
     <ColorBox />
    </div>
  )
}

export default App
