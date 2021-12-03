import react from "react";   
import style from './searchPanel.module.css'


const SearchPanel = ({onSearchChange, search, setSearchTerm}) => {
   

    function searchItem(e){
        setSearchTerm(e.target.value)
    }
   
    return(
        <div className={style.search}>
            <input placeholder="type to search" 
            className={style.search_inout}
            value={search}
            onChange={searchItem}></input>
        </div>
    )
}



export default SearchPanel