import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";
function Session() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/Session/All')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <Header />
            <Breadcrumb/>
            <section className="w3l-contact-1 pb-5" id="contact" style={{display: "flex", justifyContent: "center"}}>
                <div className="contacts-9 py-lg-5 py-md-4">
                <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_text_inner"><h3 class="p1" style={{textAlign: "center"}}>In-depth tutorials with practical sessions will take place on January 4th, 5th, and 9th</h3>
<p style={{textAlign: "center"}}>10 to 12 participants per session: registrations after application acceptance.
<br/>The sessions will be 3 hours long.</p>
<p style={{textAlign: "center"}}>Below is the list of confirmed sessions as of today (click on the session title to see detailed information).</p></div>
			</div>
            <div id="et-main-area">
                <div id="main-content">
                    <article id="post-2356" className="post-2356 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="at-above-post-page addthis_tool" data-url="https://www.ds3-datascience-polytechnique.fr/practical-sessions/"></div><div id="et-boc" className="et-boc">
                                <div className="et-l et-l--post">
                                    <div className="et_builder_inner_content et_pb_gutters3">
                                        <div className="et_pb_section et_pb_section_0 et_section_regular" >
                                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                                {data.map(item => (
                                                    <div className="accordion-item" key={item.id}>
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panel-${item.id}`} aria-expanded="true" aria-controls={`panel-${item.id}`}>
                                                                {item.title}
                                                            </button>
                                                        </h2>
                                                        <div id={`panel-${item.id}`} className="accordion-collapse collapse show">
                                                            <div className="accordion-body">
                                                                {/* <p><b>Organizer</b>: <a>{item.organizer_id.firstName}</a></p> */}
                                                                <p>&nbsp;</p>
                                                                <p><strong>Insight</strong>:<br />{item.insight}</p>
                                                                <p><strong>Requirements</strong>:<br />{item.requirements}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="at-below-post-page addthis_tool" data-url="https://www.ds3-datascience-polytechnique.fr/practical-sessions/"></div>	</div>
                    </article>
                </div>
                <span className="et_pb_scroll_top et-pb-icon"></span>
            </div>
            </div>
            </section>
            <Footer />
        </>
    )

}
export default Session