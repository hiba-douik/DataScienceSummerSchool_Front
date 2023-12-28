// Programme.js
import Footer from "./Footer";
import Header from "./Header";
import React from "react"
import { Link } from "react-router-dom";

function FAQ() {
  return (
    <div style={{ textAlign: 'center' }}>
     <Header />
     <div class="prog">
        <h1>Frequently Asked Questions</h1>
       </div>
       <div >
       <div>
        <p><strong>Q: What is the <span style={{color: "#e83e8c"}}>language</span> of the summer school?</strong></p>
        <p>A: It is English, including application, communication, courses & talks, posters.</p>
       </div>
       <div>
        <p><strong>Q: What does the<span style={{color: "#e83e8c"}}> registration fee</span>  include?</strong></p>
        <p>A: The registration fee covers the talks, the round table, and the poster session.</p>
       </div>
       <div>
        <p><strong>Q: Is a <span style={{color: "#e83e8c"}}> poster</span>  presentation considered as a decisive factor?</strong></p>
        <p>A: The primary goal of the poster sessions is to foster interaction; submitting a tentative poster title and abstract is valued positively.</p>
       </div>
       <div>
        <p><strong>Q: Do I need a <span style={{color: "#e83e8c"}}>visa</span> ?</strong></p>
        <p>A: You can find practical information <Link to="https://www.diplomatie.gouv.fr/en/coming-to-france/" style={{color:"#e83e8c"}}>here</Link>.</p>
       </div>
       </div>
       

       

    <Footer />
  </div>
  );
}

export default FAQ;
