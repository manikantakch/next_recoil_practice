import Footer from "../Footer"
import NavBar from "../NavBar"
import NestedLayout from "./nestedLayout"

function Layout({children}) {

return (

    <>
    <NavBar />
    <main style={{height:"72vh",backgroundColor:"gray"}}>{children}</main>
    <Footer />

    </>
)

}

export default Layout