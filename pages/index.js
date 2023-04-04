import Layout from "@/components/Layout";
import usePath from "@/hooks/usePath";
import Link from "next/link";
import { useRouter } from "next/router";

function Home() {

    const router = useRouter()
    const path = usePath()

    

    const handleClick = () => {

        router.push('/product');

    }


    return ( 
    <>

        <div style={{width:"100%"}}>
        <h1>Home Page</h1>
        <Link href='/blog'>
        <h2>blog</h2>       
         </Link>
         <Link href='/product'>
        <h2>products</h2>       
         </Link>
         <Link href='/posts'>
        <h2>posts</h2>       
         </Link>

         <button onClick={handleClick}>Place Order!</button>
         </div>
      
      
        </>

    )

}

export default Home