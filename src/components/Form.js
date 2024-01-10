import Header from "./Header"
import Footer from "./Footer"
import axios from "axios"
import { useState } from "react";
import Breadcrumb from "./Breadcrumb";
function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        namePoster: '',
        fileData: '',
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
      
        axios.post('http://localhost:8081/application/createApplication', formData)
          .then((response) => {
            console.log('Data sent successfully!', response.data);
            setFormData({
                firstName: '',
                lastName: '',
                telephone: '',
                email: '',
                namePoster: '',
            });
          })
          .catch((error) => {
            console.error('Error sending data:', error);
          });
      };
    
      const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'fileData') {
            const selectedFile = files[0];
            setFormData({ ...formData, fileData: selectedFile });
          } else {
            setFormData({ ...formData, [name]: value });
          }      
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
                                <h5 className="mb-sm-4 mb-3">Fill in your application</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="twice-two">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="firstName"
                                            placeholder="first name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            style={{width: "600px"}}
                                            required
                                        />
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="lastName"
                                            placeholder="last name"
                                            value={formData.lastName}
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
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="telephone"
                                            placeholder="Phone"
                                            value={formData.telephone}
                                            onChange={handleChange}
                                            style={{width: "600px"}}
                                            required
                                        />
                                    </div>
                                    <div className="twice">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="namePoster"
                                            placeholder="Your poster's title"
                                            value={formData.namePoster}
                                            onChange={handleChange}    
                                        />

                                    </div>
                                    <div>
                                        <input
                                            type="file"
                                            name="fileData"
                                            onChange={handleChange}
                                            className="file-input"
                                            accept=".pdf" 
                                        />
                                    </div>
                                    
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary btn-style mt-4">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}
export default Form