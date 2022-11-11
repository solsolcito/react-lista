import './App.css';
import { useState } from 'react'
import Todo from './components/Todo'

function App() {
  const defaultState = [
    { label: "Comprar mantequilla" },
    { label: "Comprar pan" },
    { label: "Pagar la luz" }
  ]
  const [items, setItems] = useState(defaultState)
  const [newItem, setNewItem] = useState ('')

  const onClickFn = () => {
    setItems([...items, {label: newItem}])
  }
  const eliminarTodo = () => {
    setItems([])
  }


  const onChangeFn = (event) => {
    setNewItem(event.target.value)
  }

  const deleteFn = (label) => {
    setItems(items.filter(item => item.label !== label))
  }



  const list = items.map(item => {
    return <Todo onClickFn={() =>deleteFn(item.label)}>{item.label}</Todo>
  })
  return (
    <div className="App">
      <h1>Mi lista de cosas por hacer</h1>

      <input type="text" value={newItem} onChange={onChangeFn}/>
      <button onClick={onClickFn}>Agregar</button>
      {list}
      <h2>Total de listas: {items.length}</h2>
      <button onClick={eliminarTodo}>Eliminar la Lista </button>
    </div>

  );
}

export default App;
