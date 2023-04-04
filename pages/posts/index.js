import Link from "next/link";
import { useRouter } from "next/router";
function Posts({posts}) {

    const router = useRouter()

    const handleClick = () => {
        router.push('/blog',undefined,{shallow:false})

    }
    return (
        <>
        <ul>
            {posts.map((post) => (
                <Link href={`posts/${post.id}`} passHref>
                <li key={post.id}>{post.title}</li>
                </Link>
            ))}

        </ul>
        <button type="button" onClick={handleClick}>Click blog</button>
        </>
    )
    }
    export default Posts
    
    export async function getStaticProps() {
    
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json();
    
        return {
            props: {
              posts,
            },
          }
    
    };