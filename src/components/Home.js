import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import image1 from '../IMAGES/logo_dataia.png';
import image2 from '../IMAGES/logo_datascience_initiative.png';
import image3 from '../IMAGES/logo_lix.png';
import image4 from '../IMAGES/logo_stresstest.png';
import image5 from '../IMAGES/lm.jpg';
import image6 from '../IMAGES/flags/Algeria.jpg';
import image7 from '../IMAGES/flags/Australia.jpg';
import image8 from '../IMAGES/flags/Canada.jpg';
import image9 from '../IMAGES/flags/Czech.jpg';
import image10 from '../IMAGES/flags/Chile.jpg';
import image11 from '../IMAGES/flags/Colombia.jpg';
import image12 from '../IMAGES/flags/Belgium.jpg';

function Home() {
  return (
    <div>
      <Header />

      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <section className="w3l-clients py-5" id="clients">
            <div className="call-w3 py-md-4 py-2">
              <div className="container">
                <div className="company-logos text-center">
                  <div className="row logos">
                    <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-4">
                      <Link to={"https://www.polytechnique.edu/en"} target="_blank" rel="noopener noreferrer">
                        <img src={image3} style={{ opacity: "1", maxWidth: "100%", height: "auto" }} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mt-md-0 mt-4">
                      <Link to={"https://portail.polytechnique.edu/datascience/en"} target="_blank" rel="noopener noreferrer">
                        <img src={image2} style={{ opacity: "1", maxWidth: "100%", height: "auto" }} alt="" className="img-fluid" />
                      </Link>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                      <Link to={"http://dataia.eu/"} target="_blank" rel="noopener noreferrer">
                        <img src={image1} style={{ opacity: "1", maxWidth: "100%", height: "auto" }} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-4">
                      <Link to={"https://www.polytechnique.edu/en"} target="_blank" rel="noopener noreferrer">
                        <img src={image4} style={{ opacity: "1", maxWidth: "100%", height: "auto", marginTop: "50px" }} alt="" className="img-fluid" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="owl-one owl-carousel owl-theme">
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Monday, January 4 Saturday, January 9, 2021</h5>
                        <p className="mt-4 pr-lg-4">VIRTUAL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none' }}></path>
          </svg>
        </div>
      </section>
      <div>
        <p className="container text-center"> <strong>This fourth edition of Data Science Summer School </strong>(DS3) is co-organised by the <strong><Link href="https://portail.polytechnique.edu/datascience/en">Data Science Initiative</Link></strong>  of <strong></strong><Link href="https://portail.polytechnique.edu/datascience/en"> École polytechnique</Link>, <Link href="https://portail.polytechnique.edu/datascience/en">DATAIA Institute</Link>,  and the <Link href="https://portail.polytechnique.edu/datascience/en">Chair Stress Test</Link>.</p>
        <p className="container text-center">The primary focus of the event is to provide a series of courses covering the latest advances in the field of data science.</p>
        <p className="container text-center">The event is targeted for students (MSc2, PhD), postdocs, academics, members of public institutions, and professionals.</p>
        <p className="container text-center">Due to the COVID-19 pandemic, the 4th Data Science Summer School, initially planned on June 2020, has been postponed to January 2021 and it will be held virtually.</p>
        <p className="container  text-center">This special edition of the summer school will last three days and it will include courses, parallel sessions, exhibitions, practical sessions and <Link href="https://portail.polytechnique.edu/datascience/en">poster sessions</Link> .</p>
      </div>
      <div className="container text-center">
        <h1>DS3 is composed of</h1>
      </div>

      <div>
        <div className="circle-images-container">
          <div className="circle">
            <img src={image5} alt="" className="img-fluid" />
            <div> <p>tutorials on selected topics  presented by
              leading experts of the area1,</p>
            </div>
          </div>
          <div className="circle">
            <img src={image5} alt="" className="img-fluid" />
          </div>
          <div className="circle">
            <img src={image5} alt="" className="img-fluid" />
          </div>
          <div className="circle">
            <img src={image5} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="circle-text-container">
          <div className="circle-text">

            <div> <p>tutorials on selected topics
              presented by
              leading experts of the area1,</p></div>

          </div>
          <div className="circle-text">
            <p>parallel sessions on Data Science for Climate and Natural Language Processing,</p>
          </div>
          <div className="circle-text">
            <p>several networking facilities, including poster sessions and meeting possibilities at the sponsor booths.</p>
          </div>
          <div className="circle-text">
            <p>in-depth tutorials with practical sessions during 3 days in smaller groups.</p>
          </div>
        </div>
        <div className="container text-center" >
          <h1>Statistics of the event 2019 :</h1>

        </div>
        <div className="container" style={{ marginTop: '80px' }}>
          <div className="row">
            <div className="col-lg-4">
              <ul className="key-statistics-list">
                <li>500 participants</li>
                <li>307 students (MSc, PhD) & postdocs</li>
                <li>105 professionals</li>
                <li>35 experts (speakers, guests)</li>
                <li>34 countries (click on the flags)</li>
                <li>6 continents</li>
                <li>13 in-depth tutorials</li>
                <li>220 institutions</li>
                <li>70 companies</li>
                <li>7 sponsors</li>
                <li>152 posters</li>
                <li>28% women’s participation</li>
              </ul>
            </div>


            <div className="col-lg-8">
              <div className="mt-8 pr-lg-8">
                <img
                  src={image6}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image7}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image8}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image9}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image10}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image11}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image12}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image6}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image7}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image8}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image9}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image10}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image11}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image12}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image6}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image7}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image8}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image9}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image10}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image11}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
                <img
                  src={image12}
                  alt=""
                  className="img-fluid border border-gray-500 mr-2 mb-2"
                  style={{ width: '60px', height: '60px' }}
                />

              </div>
            </div>
            <div className="container text-center" >
              <h1>Statistics of the event 2019 :</h1>
              <div className="container text-center" style={{ display: 'flex', gap: '10px' }}>
                <button className="container text-center" style={{ padding: '10px', backgroundColor: '#FF6B9E', color: 'white', border: 'none' }}>Twitter #XDS3</button>
                <button className="container text-center" style={{ padding: '10px', backgroundColor: '#FF6B9E', color: 'white', border: 'none' }}>Facebook
                </button>
              </div>

              <p>1. Participants are encouraged to present a poster during the event.</p>
            </div>


          </div>




        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;