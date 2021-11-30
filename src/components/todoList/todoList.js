import react from "react";   
import style from './todoList.module.css'
import {BiTrash} from 'react-icons/bi'
import {FaExclamation} from 'react-icons/fa'


const ToDoList = (props) =>{
    return(
        <div className={style.todo}>
            <ul>
                {props.todos.map((item, index) => (
                    <li key={index} className={style.todo_list}>
                        {item.label}
                        <div className={style.icons}>
                            <div className={style.trash_icon}> <BiTrash /> </div>
                            <div className={style.undov_icon}> <FaExclamation /> </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList