import BodyContent from "./Components/BodyContent/BodyContent"
// import FooterContent from "./Components/FooterContent/FooterContent"
import HeaderContent from "./Components/HeaderContent/HeaderContent"
import '../App.css'

function BlogPage() {


  return (
    <>
    
      <div id="wrapper">
        <HeaderContent/>
        <BodyContent>
          <h2>Blog page</h2>
        </BodyContent>
        
        {/* <FooterContent/> */}

      </div>
    </>
  )
}

export default BlogPage
