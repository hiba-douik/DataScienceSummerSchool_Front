import Header from "./Header"
import Footer from "./Footer"
function Contact(){

    return(
        <>
        {/* About Breadcrumb */}
        <Header/>
        <section className="w3l-breadcrumb">
          <div className="breadcrumb-bg breadcrumb-bg-about py-5">
            <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
              <h2 className="title mt-5 pt-lg-5 pt-sm-3">Get in touch</h2>
              <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-md-5">
                <li><a href="index.html">Home</a></li>
                <li className="active"> / Contact us </li>
              </ul>
            </div>
          </div>
          <div className="waveWrapper waveAnimation">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none' }}></path>
            </svg>
          </div>
        </section>
        {/* // About Breadcrumb */}
  
        {/* Contact Block */}
        {/* Contact 1 */}
        <section className="w3l-contact-1 pb-5" id="contact">
      <div className="contacts-9 py-lg-5 py-md-4">
        <div className="container">
          <div className="d-grid contact-view">
            <div className="cont-details">
              <h4 className="title-small">Get in touch</h4>
              <h3 className="title-big mb-4">Feel free to contact us</h3>
              <p className="mb-sm-5 mb-4">Start working with Us, We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>

              <div className="cont-top">
                <div className="cont-left text-center">
                  <span className="fa fa-map-marker text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>Our head office address</h6>
                  <p className="pr-lg-5">Address here, 208 Trainer Avenue street, Illinois, UK - 62617.</p>
                </div>
              </div>
              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-phone text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>Call for help </h6>
                  <p><a href="tel:+(21) 255 999 8888">+(21) 255 999 8888</a></p>
                </div>
              </div>
              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-envelope-o text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>Contact with our support</h6>
                  <p><a href="mailto:coursing@mail.com" className="mail">coursing@mail.com</a></p>
                </div>
              </div>
            </div>
            <div className="map-content-9">
              <h5 className="mb-sm-4 mb-3">Write to us</h5>
              <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                <div className="twice-two">
                  <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name" required />
                  <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email" required />
                </div>
                <div className="twice">
                  <input type="text" className="form-control" name="w3lSubject" id="w3lSubject" placeholder="Subject" required />
                </div>
                <textarea name="w3lMessage" className="form-control" id="w3lMessage" placeholder="Message" required></textarea>
                <div className="text-right">
                  <button type="submit" className="btn btn-primary btn-style mt-4">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
        <div className="map-iframe">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen=""
        title="Google Map"
      ></iframe>
    </div>
        {/* / Contact 1 */}
        <Footer/>
      </>
    )

}
export default Contact