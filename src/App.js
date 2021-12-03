import { useEffect, useState } from 'react';
import style from './App.module.css';
import AppHeader from './components/AppHeader/appheader';
import FilterPanel from './components/FilterPanel/filterPanel';
import SearchPanel from './components/SearchPanel/searchPanel';
import TodoAdd from './components/todoAddForm/todoAdd';
import ToDoList from './components/todoList/todoList';
import TodoListItem from './components/todoList/todoListItem';

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
  const [visibleItems, setVisibleItems] = useState(todo)
  const [filterItems, setFilterItems] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  function AddToDoItem(label) {
    const newToDo = createTodoItem(label)
    setTodo([...todo, newToDo]) 
  }
  
  function onToggleDone(todoId){
    let mapped = todo.map(item => {
      return item.id === todoId ? { ...item, done: !item.done } : { ...item};
    });
    setTodo(mapped);
   

  }

  function onImportant(todoId){
    let imported = todo.map(item => {
      return item.id === todoId ? {...item, important: !item.important} : {...item}
    })
    setTodo(imported)
  }

  function onDelete(todoId){
    const newTodos = todo.filter((item) => item.id !== todoId)
    setTodo(newTodos)
  }

  function onSearchChange(term) {
    setSearchTerm(term)
  }

  function onFilterChange(filter){
    setFilterItems(filter)
  }

  useEffect(() => {
    setVisibleItems(filter(search(todo, searchTerm), filterItems))
  }, [searchTerm, filterItems])

  useEffect(() => {
    setVisibleItems(todo)
  }, [todo])

  function search(items, term){
    if(term.length === 0){
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > - 1
    })
  }

  function filter(items, filter){
    switch (filter){
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)  
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items    
    }
  }


  const countToDo = todo.length;
  const countDone = todo.filter((item) => item.done).length;

  
 
  return (
   <div className={style.App}>
     <AppHeader todo={todo} countToDo={countToDo} countDone={countDone}/>
      <div className={style.search_panel}>
        <SearchPanel search={searchTerm} setSearchTerm={setSearchTerm} onSearchChange={onSearchChange} />
        <FilterPanel filter={filterItems} onFilterChange={onFilterChange}/>
      </div>
      <ToDoList item={visibleItems} onToggleDone={onToggleDone} onDelete={onDelete} onImportant={onImportant}/>
      <TodoAdd add={AddToDoItem}/>
    
   </div>
  );
}

export default App; 