import { Link } from "react-router-dom";
function Footer(){
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
   return(
  
      <>
        <hr/>
        <div style={{backgroundColor:"#FE79A2"}} className="footer-29 py-3 text-center">
          <Link to="/contact"><button className="btn btn-outline-dark">Contact</button></Link>
        </div>
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-1">
        <div className="container py-md-4 text-center">
          <p>© École Polytechnique 2020 - All rights reserved.</p>
        </div>
      </div>
    </section>
    <div style={{display:'none'}}>
    <button  onClick={topFunction} id="movetop" title="Go to top">
    &#10548;
  </button>
    </div>
  </>
   )
}
export default Footer