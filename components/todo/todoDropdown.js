import { todoListFilterState } from "@/atoms/todoAtoms"
// import { filterTodoList } from "@/selectors/todoSelector"
import { useRecoilState } from "recoil"


function  FilterTodoList() {

    const [filter,setFilter] = useRecoilState(todoListFilterState)



    const updateList = ({target:{value}}) => {
        setFilter(value)



    }

    return (
        <>
         
      Filter:
      <select value={filter} onChange={updateList}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    
        </>
    )





}

export default FilterTodoList