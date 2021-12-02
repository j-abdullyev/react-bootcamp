import react from "react"; 
import style from './appheader.module.css'


const AppHeader = ({countToDo, countDone}) =>{
    return(
        <div className={style.header}>
            <h1>ToDo List</h1>
            <div className={style.counts_todo}>{countToDo} more to do, {countDone} done</div>
        </div>
    )
}


export default AppHeader