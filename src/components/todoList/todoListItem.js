import react from "react";   
import style from './todoList.module.css'
import {BiTrash} from 'react-icons/bi'
import {FaExclamation} from 'react-icons/fa'


const TodoListItem = ({label, onToggleDone, id, done, onDelete, onImportant, important}) => (
    <div className={style.x}>
        <span
            className={style.word}
            style={{ textDecoration: done ? 'line-through' : 'none', fontWeight: important ? 'bold' : 'normal' }}
            onClick={() => onToggleDone(id)}> {label} 
        </span>
        <div className={style.icons}>
            <div className={style.trash_icon} onClick={() => onDelete(id)}> <BiTrash /> </div>
            <div className={style.undov_icon} onClick={() => onImportant(id)}> <FaExclamation /> </div>
        </div>
    </div>
  
)


export default TodoListItem