const { default: Link } = require("next/link");

function Blog({posts}) {
return (
    <ul>
        {posts.map((post) => (
            <Link href={`blog/${post.id}`} passHref>
            <li key={post.id}>{post.title}</li>
            </Link>
        ))}
    </ul>
)
}
export default Blog

export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();

    return {
        props: {
          posts,
        },
      }

};


