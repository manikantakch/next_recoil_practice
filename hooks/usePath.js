import { useRouter } from "next/router";


function usePath() {

    const {asPath} = useRouter();

    let path;

    if(asPath === "/") {
        path = "home"

    }
    else  {
        const splitPaths = asPath.split("/");
        path = splitPaths.filter((sep) => sep!== "").join(" ");
    }

    return path
  
    
    
}

export default usePath