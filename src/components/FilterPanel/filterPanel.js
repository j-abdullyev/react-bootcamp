import style from './filterPanel.module.css'


const FilterPanel = ({filter, onFilterChange}) =>{
    return (
        <div className={style.filter_btns}>
            <button className={style.all} onClick={() => onFilterChange('all')}>All</button>
            <button className={style.active} onClick={() => onFilterChange('active')}>Active</button>
            <button className={style.done} onClick={() => onFilterChange('done')}>Done</button>
        </div>
    )
}


export default FilterPanel