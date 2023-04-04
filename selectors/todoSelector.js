import { todoListFilterState, todoListState } from "@/atoms/todoAtoms";
import { selector } from "recoil";


export const filterTodoList = selector({
    key:'FilterTodoList',
   get:({get}) => {

    let filter = get(todoListFilterState)
    let list = get(todoListState)

    switch(filter) {
        case "Show Completed" : 
            return list.filter((item) => item.isCompleted)
        case "Show Uncompleted" :
            return list.filter((item) => !item.isCompleted)
        default:
            return list
    } 

   }

})