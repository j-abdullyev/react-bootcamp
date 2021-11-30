import react from "react";   
import style from './filterPanel.module.css'


const FilterPanel = () =>{
    return (
        <div className={style.filter_btns}>
            <button className={style.all}>All</button>
            <button className={style.active}>Active</button>
            <button className={style.done}>Done</button>
        </div>
    )
}



export default FilterPanel