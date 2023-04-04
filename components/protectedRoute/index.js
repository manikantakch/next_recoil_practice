import { useRouter } from "next/router"
import Router from "next/router";

function ProtectedRoute({children}) {

const router = useRouter()
let token;

if (typeof window !== 'undefined') {

    token = localStorage.getItem('token')
  }

  console.log("pathing", router.asPath);
  


if(token && router.asPath === "/") Router.push('/blog')
else if(!token && router.asPath !== "/") Router.push("/")
else Router.push(router.asPath)

return children


}

export default ProtectedRoute