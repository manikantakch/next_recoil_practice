import { useRouter } from "next/router"
function ProductDetails() {
     const router = useRouter()

     console.log("router, router",router)

    return <h1>Details of the product {router.query.productId}</h1>


}

export default ProductDetails