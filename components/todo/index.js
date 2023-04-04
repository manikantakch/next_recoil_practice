import TodoItem from "./todoItem"
import {  todoListState } from "@/atoms/todoAtoms"
import { useRecoilValue } from "recoil"
import AddTodo from "./addTodo"
import { filterTodoList } from "@/selectors/todoSelector"
import FilterTodoList from "./todoDropdown"

function TodoList() {

const todoList = useRecoilValue(filterTodoList)


return  (
    <>
    <FilterTodoList />
    <AddTodo />


    {todoList && todoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
    
    </>
)


}
export default TodoList