// Programme.js
import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { Link } from "react-router-dom";


function FAQ() {
  return (
    <div style={{ textAlign: 'center' }}>
     <Header />
     <div class="prog" >
        <h1 style={{padding:"60px"}}>SPONSORS</h1>
       </div>
       <div >
       <div style={{marginTop:"100px"}}>
       <h1>HOW TO BECOME A SPONSOR?</h1>
       <div style={{marginTop:"30px", marginLeft:"80px" , marginRight:"80px"}}>
       <p>This year we organize the <strong>4th Data Science Summer School</strong> to continue the lively exchange, sharing and discovery of the latest advances of the field, with internationally renowned professors and experts of the area. The summer school will take place from <strong>January 4th to January 9th, 2021 virtually</strong>. It is composed of talks, exhibitions, poster sessions and cocktail.

The event provides opportunity for the participants from the academic and industrial world to share their expertise, the latest challenges and possible solutions in data science.</p>
        </div>

        <div style={{position:"center", marginTop:"30px"}}>
    <Link className="lkm" to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/11/Sponsoring-offer-jan-21.pdf">Download our sponsoring offer</Link>
</div>
<p style={{marginTop:"30px", marginLeft:"130px" , marginRight:"80px"}}>Feel free to  <Link  to="/contact">contact us </Link> if you have questions.</p>
        </div>
     
     
      
       </div>
       

       

    <Footer />
  </div>
  );
}

export default FAQ;
