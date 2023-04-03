import Link from "next/link";
import { useRouter } from "next/router";

function Home() {

    const router = useRouter()

    const handleClick = () => {

        router.push('/product');

    }


    return ( 
    <>
        <h1>Home Page</h1>
        <Link href='/blog'>
        <h2>blog</h2>       
         </Link>
         <Link href='/product'>
        <h2>products</h2>       
         </Link>

         <button onClick={handleClick}>Place Order!</button>
      
        </>

    )

}

export default Home