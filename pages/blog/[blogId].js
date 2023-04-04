import { useRouter } from "next/router";

function BlogId({title,id,body}) {
const router = useRouter()



return (
<>
<h1>Blog Id : {`${router.query.blogId}`}</h1>
<h2>title: {`${title}`}</h2>
<h2>body: {`${body}`}</h2>
</>
)


}


export async function getServerSideProps(context) {

    const {params} = context;

    const res = await fetch(`${'https://jsonplaceholder.typicode.com/posts'}/${params.blogId}`)
    const post = await res.json();

    return {
        props:{
            id:params.blogId,
            title:post.title,
            body:post.body
        }
    }



}

export default BlogId