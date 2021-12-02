import react, { useState } from "react";   
import style from './todoAdd.module.css'

const TodoAdd = (props) => {

    const [addTodo, setaddTodo] = useState('')    

    function addNewTodo(){
        props.add(addTodo)
    }

    return(
        <div className={style.todo_add}>
            <input
                className={style.add_input}
                placeholder="What needs to be done"
                onChange={(e) => setaddTodo(e.target.value)}
            />
            <button
                onClick={addNewTodo} 
                className={style.add_btn}>Add Item
            </button>
        </div>
    )
}


export default TodoAdd