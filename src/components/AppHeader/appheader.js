import react from "react"; 
import style from './appheader.module.css'


const AppHeader = () =>{
    return(
        <div className={style.header}>
            <h1>ToDo List</h1>
            <div className={style.counts_todo}>2 more to do, 0 done</div>
        </div>
    )
}


export default AppHeader