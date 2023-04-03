import { useRouter } from "next/router"


function Docs() {

    const router = useRouter()
    const {params = []} = router.query

    console.log("params",params);


    if(params.length === 2) {
        return <h1>docs of feature {params[0]} concept {params[1]}</h1>

    }
    else if(params.length === 1) {
        return <h1>docs of feature {params[0]}</h1>

    }
    

    return <h1>Home details of docs</h1>

}
export default Docs