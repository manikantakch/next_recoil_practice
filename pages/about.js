import Footer from "@/components/Footer"

function About(){

    return <h1>About Page</h1>

}

About.getLayout = function getLayout(page) {
    return (
        <>
        {page}
        <Footer/>
        </>
    )
}
export default About