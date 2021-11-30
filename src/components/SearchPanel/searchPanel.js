import react from "react";   
import style from './searchPanel.module.css'


const SearchPanel = () =>{
    return(
        <div className={style.search}>
            <input placeholder="type to search" className={style.search_inout}></input>
        </div>
    )
}



export default SearchPanel