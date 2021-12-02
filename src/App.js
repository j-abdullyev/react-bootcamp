import { useState } from 'react';
import style from './App.module.css';
import AppHeader from './components/AppHeader/appheader';
import FilterPanel from './components/FilterPanel/filterPanel';
import SearchPanel from './components/SearchPanel/searchPanel';
import TodoAdd from './components/todoAddForm/todoAdd';
import ToDoList from './components/todoList/todoList';

let maxId = 100;


function createTodoItem(label){
  return{
    label,
    important: false,
    done: false,
    id: maxId++,
  }
}

const initialTodoItems = [
  createTodoItem("Drink Coffee"),
  createTodoItem("Make Awesome App"),
  createTodoItem("Have a lunch")
]


function App() {
  const [todo, setTodo] = useState(initialTodoItems)

  function AddToDoItem(label) {
    const newToDo = createTodoItem(label)
    setTodo([...todo, newToDo]) 
  }
  
  function onToggleDone(todoId){
    let mapped = todo.map(item => {
      return item.id == todoId ? { ...item, done: !item.done } : { ...item};
    });
    setTodo(mapped);
  }

  function onImportant(todoId){
    let imported = todo.map(item => {
      return item.id == todoId ? {...item, important: !item.important} : {...item}
    })
    setTodo(imported)
  }

  function onDelete(todoId){
    const newTodos = todo.filter((item) => item.id !==todoId)
    setTodo(newTodos)
  }

  const countToDo = todo.length;
  const countDone = todo.filter((item) => item.done).length;

  
 
  return (
   <div className={style.App}>
     <AppHeader countToDo={countToDo} countDone={countDone}/>
      <div className={style.search_panel}>
        <SearchPanel />
        <FilterPanel/>
      </div>
      <ToDoList todos={todo} onToggleDone={onToggleDone} onDelete={onDelete} onImportant={onImportant}/>
      <TodoAdd add={AddToDoItem}/>
    
   </div>
  );
}

export default App; 