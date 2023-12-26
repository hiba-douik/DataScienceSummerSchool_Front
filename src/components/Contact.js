import Header from "./Header"
import Footer from "./Footer"
import axios from "axios"
import { useState } from "react";
import Breadcrumb from "./Breadcrumb";
function Contact(){
    const [formData, setFormData] = useState({
        cName: '',
        cEmail: '',
        cTelephone: '',
        cMessage: '',
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
      
        axios.post('http://localhost:8081/contact/save', formData)
          .then((response) => {
            // Handle success response
            console.log('Data sent successfully!', response.data);
            setFormData({
              name: '',
              email: '',
              tele: '',
              message: '',
            });
          })
          .catch((error) => {
            console.error('Error sending data:', error);
          });
      };
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

    return(
        <>
            <Header />
            <Breadcrumb/>
            <section className="w3l-contact-1 pb-5" id="contact" >
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="d-grid contact-view"  style={{display: "flex", justifyContent: "center"}}>
                            <div className="map-content-9">
                                <h5 className="mb-sm-4 mb-3">Write to us</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="twice-two">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={{width: "600px"}}
                                            required
                                        />
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{width: "600px"}}
                                            required
                                        />
                                    </div>
                                    <div className="twice">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tele"
                                            placeholder="Telephone"
                                            value={formData.tele}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary btn-style mt-4">
                                            Send Message
                                        </button>
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
            <Footer />
        </>
    )

}
export default Contact