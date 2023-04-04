import { useState } from "react"

function Profile(){
    const [count,setCount] = useState(0)

    const handleClick = () => {
        setCount(prev=>prev+1)
    }

    return (
    <>
    <h1>Profile Page</h1>
    <h5>Count:{count}</h5>
    <button type="button" onClick={handleClick}>Count</button>
    </>
    )
}

export default Profile