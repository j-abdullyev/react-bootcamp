import react from "react";   
import style from './todoList.module.css'
import {BiTrash} from 'react-icons/bi'
import {FaExclamation} from 'react-icons/fa'
import TodoListItem from "./todoListItem";


const ToDoList = ({item, onToggleDone, onDelete, onImportant}) =>{
    return(
        <div className={style.todo}>
            <ul>
                {item.map((item) => (
                    <li key={item.id}  className={style.todo_list}> 
                        <TodoListItem {...item} onToggleDone={onToggleDone} onDelete={onDelete} onImportant={onImportant}/>
                        {/* {item.label}
                        <div className={style.icons}>
                            <div className={style.trash_icon}> <BiTrash /> </div>
                            <div className={style.undov_icon}> <FaExclamation /> </div>
                        </div> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList