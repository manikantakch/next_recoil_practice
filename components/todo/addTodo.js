import { useState } from "react";
import { todoListState } from "@/atoms/todoAtoms";
import { useSetRecoilState } from "recoil";


function AddTodo() {

const [inputValue,setInputValue] = useState("");
const setTodoList = useSetRecoilState(todoListState);



const handleChange = (e) =>{

    const {value} = e.target
    setInputValue(value)


}

const addTodo = () => {

    setTodoList((prevList) => ([
        ...prevList,
        {
            id:Math.random(),
            text:inputValue,
            isCompleted:false
        }
    ]))

    setInputValue('')


}

    return (

        <>
        <input type="text" value={inputValue} onChange={(e)=>handleChange(e)} />
        <button type="button" onClick={addTodo}>Add Todo</button>
        </>
    )



}
export default AddTodo