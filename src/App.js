import { useState } from 'react';
import style from './App.module.css';
import AppHeader from './components/AppHeader/appheader';
import FilterPanel from './components/FilterPanel/filterPanel';
import SearchPanel from './components/SearchPanel/searchPanel';
import TodoAdd from './components/todoAddForm/todoAdd';
import ToDoList from './components/todoList/todoList';

function App() {
  const [todo, setTodo] = useState([
    {
      label: "Coffe",
      id: 1,
      done: false,
      important: false
    },
    {
      label: "tea",
      id: 2,
      done: false,
      important: false
    },
    {
      label: "cola",
      id: 3,
      done: false,
      important: false
    },
  ])
  return (
   <div className={style.App}>
     <AppHeader />
      <div className={style.search_panel}>
        <SearchPanel />
        <FilterPanel />
      </div>
      <ToDoList todos={todo}/>
      <TodoAdd />
    
   </div>
  );
}

export default App; 