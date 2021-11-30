import react from "react";   
import style from './todoAdd.module.css'

const TodoAdd = () =>{
    return(
        <div className={style.todo_add}>
            <input className={style.add_input} placeholder="What needs to be done"></input>
            <button className={style.add_btn}>Add Item</button>
        </div>
    )
}


export default TodoAdd