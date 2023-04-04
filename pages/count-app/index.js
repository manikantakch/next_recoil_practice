import { counterAtom } from "@/atoms/countAtom"
import { useRecoilState, useResetRecoilState } from "recoil"



function Counter() {

    const [count,setCount] = useRecoilState(counterAtom)

    const resetCount = useResetRecoilState(counterAtom)




    return (
        <>
        <h1>Recoil</h1>
        <h3>count value : {count}</h3>
        {/* <h3>number : {count.number}</h3> */}

        <button onClick={() => setCount(count +1)}>Increase count</button>
        {/* <button onClick={()=> setCount(count.number + 1)}>Increase number</button> */}
        <button onClick={()=> resetCount()}>Reset count</button>
        </>
    )




}

export default Counter