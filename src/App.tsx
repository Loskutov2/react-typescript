import { useState } from 'react';
import './App.css';
import { ToDoForm } from './components/ToDoForm';
import { ToDo } from './components/ToDo';
import { ToDoObj } from './types';


function App() {
  const [toDos, setToDos] = useState<ToDoObj[]>([])

  return ( 
    <>
      <h1>TODO's</h1>
      <ToDoForm addToDo={addToDo}/>
      <ul>
        {toDos.map(item=><ToDo item={item} removeToDo={removeToDo} key={item.id}/>)}
      </ul>
    </>
  );
}

export default App;
