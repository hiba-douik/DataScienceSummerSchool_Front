// Programme.js
import Footer from "./Footer";
import Header from "./Header";
import React from "react"
import './prog.css';
import { Link } from "react-router-dom";

function Programme() {
  return (
    <div>
    <Header />
       <div class="prog">
        <h1>Program</h1>
       </div>
     <div>

     <div class="calendar">
  <div class="timeline">
    <div class="spacer"></div>
    <div class="time-marker">7:40 AM</div>
    <div class="time-marker">8 AM</div>
    <div class="time-marker">8:20 AM</div>
    <div class="time-marker">8:40 AM</div>
    <div class="time-marker">9 AM</div>
    <div class="time-marker">9:20 AM</div>
    <div class="time-marker">10 AM</div>
    <div class="time-marker">10:30 AM</div>
    <div class="time-marker">12 AM</div>
   
  </div>
  <div class="days">
    
    
    <div class="day wed">
      <div class="date">
       
        <p class="date-day">Wed</p>
        <p class="date-num">1/6</p>
      </div>
      <div class="events">
      <div class="event start-1 end-2 writing">
          <p class="title">Computational optimal transport – Gabriel Peyré
           </p>
          
          
        </div>
        <div class="event start-11 end-4 ent-law">
          <p class="title">Ethics & AI – Emmanuel Bacry, Antonio Casilli, Laurence Devillers </p>
          
          
        </div>

        <div class="event start-10 end-12 corp-fi">
          <p class="title">  Opening   </p>
          
          
        </div>
    
      </div>
    </div>
    <div class="day thurs">
      <div class="date">
       
        <p class="date-day">Thurs</p>
        <p class="date-num">1/7</p>
      </div>
      <div class="events">
        <div class="event start-10 end-12 corp-fi">
          <p class="title">Opening</p>
      
        </div>
        <div class="event start-1 end-4  writing">
          <p class="title">How to attribute extreme events in climate studies – Philippe Naveau</p>
       
        </div>
        
      <div class="event start-12 end-1  ent-law">
          <p class="title">Robust machine learning – Pradeep Ravikumar
           </p>
          
          
        </div>
        <div class="events">
        <div class="event start-13   end-5 corp-fi">
          <p class="title">Towards a blend of machine learning and microeconomics – Michael Jordan</p>
      
        </div>
        </div>
      </div>

    </div>
    <div class="day fri">
      <div class="date">
        
        <p class="date-day">Fri</p>
        <p class="date-num">1/8</p>
      </div>
      <div class="events">
      <div class="event start-1 end-2 ent-law ">
          <p class="title">Robust machine learning – Pradeep Ravikumar
           </p>
          
          
        </div>
        <div class="event start-11 end-4 writing">
          <p class="title">Optimization challenges in adversarial ML – Volkan Cevher </p>
          
          
        </div>

        <div class="event start-10 end-12 corp-fi">
          <p class="title">  Opening   </p>
          
          
        </div>
    
      </div>
    </div>
  </div>
</div>

<div>
    <Link className="lk" to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/12/DS32020-Plenary-Talks-Program.pdf">Download the pdf abstracts of all plenary lectures (January 2023)</Link>
</div>
     </div>
    <Footer />
  </div>
  );
}

export default Programme;
