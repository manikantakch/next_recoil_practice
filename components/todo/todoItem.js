import {useRecoilState} from 'recoil'
import { todoListState } from "@/atoms/todoAtoms"

function TodoItem({todo}) {

    const [todoList,setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem) => listItem === todo);


    const editTodo = (e) => {

        const {value} = e.target;

        const newList = replaceIndexValues(todoList,index,{
            ...todo,
            text:value
        })

        setTodoList(newList)

    }

    const toggleCompetion = () => {

        const newList = replaceIndexValues(todoList,index,{
            ...todo,
            isCompleted:!todo.isCompleted
        })

        setTodoList(newList)

    }

    const handleDelete = () => {
        const newList = removeTodo(todoList,index);
        setTodoList(newList);
    }


    return (
        <>
        <div>
        <input type="checkbox" checked={todo.isCompleted} onChange={toggleCompetion} />
        <input type="text" value={todo.text} onChange={(e)=>editTodo(e)} />
       
        <button onClick={handleDelete}>X</button>
        </div>
        </>
    )


}

const replaceIndexValues = (arr,index,newValue) => {
    return [...arr.slice(0,index),newValue,...arr.slice(index+1)]
}

const removeTodo  = (arr,index) => {
    return [...arr.slice(0,index), ...arr.slice(index+1)]

}


export default TodoItem