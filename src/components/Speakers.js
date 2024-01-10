import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import image1 from '../IMAGES/Speakers/Volkan.jpg';

function Speakers() {
 window.onscroll = function () {
  scrollFunction()
 };

 function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   document.getElementById("movetop").style.display = "block";
  } else {
   document.getElementById("movetop").style.display = "none";
  }
 }
 return (
  <>
   <Header />
   <div id="et-main-area" style={{ marginTop: "100px" }}>
    <div id="main-content">
     <article id="post-2" className="post-2 page type-page status-publish hentry">
      <div className="entry-content">
       <div className="at-above-post-page addthis_tool" data-url="https://www.ds3-datascience-polytechnique.fr/speakers/"></div><div id="et-boc" className="et-boc">
        <div className="et-l et-l--post">
         <div className="et_builder_inner_content et_pb_gutters3">
          <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular" style={{ backgroundColor: "black" }} >
           <div className="et_pb_row et_pb_row_0" >
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child" >
             <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_center et_pb_bg_layout_dark" >
              <div className="et_pb_text_inner"><h1 style={{ textAlign: "center" }}><strong>SPEAKERS</strong></h1></div>
             </div>
            </div>
           </div>
          </div>  <div className="et_pb_section et_pb_section_1 et_section_regular et_section_transparent" >
           <div className="et_pb_row et_pb_row_1">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 style={{ textAlign: "left" }}>Speakers</h1></div>
             </div>
            </div>
           </div>  <div className="et_pb_row et_pb_row_2">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_0 et_pb_has_overlay">
              <Link to="https://people.epfl.ch/volkan.cevher" target="_blank"><span className="et_pb_image_wrap "><img src={image1} alt="" title="ds3-speakers-2020-CEVHER-Volkan" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1393px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div>
             <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Volkan CEVHER</h4>
               <p style={{ fontStyle: "italic" }}>Associate Professor &#8211; EPFL</p>
               <p>Title: <strong>Optimization challenges in adversarial ML</strong></p>
               <p>Slide : <Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/volkan_cevher_optimization_challenges_in_adversarial_ML.pdf" target="_blank" rel="noopener noreferrer">Optimization challenges in adversarial ML</Link></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_1 et_pb_has_overlay">
              <Link to="https://perso.telecom-paristech.fr/fdalche/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-D_ALCHE-BUC-Florence.jpg" alt="" title="ds3-speakers-2020-D_ALCHE-BUC-Florence" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-D_ALCHE-BUC-Florence.jpg 5338w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-D_ALCHE-BUC-Florence-1280x959.jpg 1280w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-D_ALCHE-BUC-Florence-980x734.jpg 980w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-D_ALCHE-BUC-Florence-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 5338px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Florence D&#8217;ALCHÉ-BUC</h4>
               <p style={{ fontStyle: "italic" }}>Professor &#8211; Télécom Paris</p>
               <p>Title: <strong>Kernels: shallow and deep learning</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_image et_pb_image_2   et_pb_has_overlay">
              <Link to="https://people.epfl.ch/anthony.davison" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Anthony-DAVISON.jpg" alt="" title="speakers-2020-Anthony-DAVISON" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Anthony-DAVISON.jpg 794w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Anthony-DAVISON-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 794px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Anthony DAVISON</h4>
               <p style={{ fontStyle: "italic" }}>Professor &#8211; EPFL</p>
               <p>Title: <strong>Climate risks and extremes</strong></p>
               <p>Slide : <Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/anthony_davison_climate_risks_and_extremes.pdf" target="_blank" rel="noopener noreferrer">Climate risks and extremes</Link></p></div>
             </div>
            </div>
           </div>  <div className="et_pb_row et_pb_row_3">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_3   et_pb_has_overlay">
              <Link to="https://people.eecs.berkeley.edu/~jordan/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Michael-JORDAN.jpg" alt="" title="speakers-2020-Michael-JORDAN" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Michael-JORDAN.jpg 794w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Michael-JORDAN-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 794px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Michael JORDAN</h4>
               <p style={{ fontStyle: "italic" }}>Professor &#8211; University of California, Berkeley</p>
               <p>Title: <strong>Towards a blend of machine learning and microeconomics</strong></p>
               <p>Slide : <Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/michael_jordan_towards_a_blend_of_machine_learning_and_microeconomics.pptx" target="_blank" rel="noopener noreferrer">Towards a blend of machine learning and microeconomics</Link></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_4   et_pb_has_overlay">
              <Link to="https://www.colorado.edu/faculty/claire-monteleoni/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Claire-MONTELEONI.jpg" alt="" title="speakers-2020-Claire-MONTELEONI" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Claire-MONTELEONI.jpg 794w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Claire-MONTELEONI-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 794px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_6  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Claire MONTELEONI</h4>
               <p style={{ fontStyle: "italic" }}>Associate Professor &#8211; University of Colorado Boulder</p>
               <p>Title: <strong>Climate informatics: machine learning for the study of climate change</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_image et_pb_image_5   et_pb_has_overlay">
              <Link to="http://www.lsce.ipsl.fr/Pisp/philippe.naveau/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-NAVEAU-Philippe.jpg" alt="" title="ds3-speakers-2020-NAVEAU-Philippe" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-NAVEAU-Philippe.jpg 795w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-NAVEAU-Philippe-480x359.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 795px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_7  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Philippe NAVEAU</h4>
               <p style={{ fontStyle: "italic" }}>Research Scientist &#8211; LSCE, IPSL-CNRS</p>
               <p>Title: <strong>How to attribute extreme events in climate studies</strong></p>
               <p><b>Slide : </b><Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/philippe_naveau_how_to_attribute_extreme_events_in_climate_studies.pdf" target="_blank" rel="noopener noreferrer">How to attribute extreme events in climate studies</Link></p></div>
             </div>
            </div>
           </div>  <div className="et_pb_row et_pb_row_4">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_6   et_pb_has_overlay">
              <Link to="http://www.gpeyre.com" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-PEYRE-Gabriel.jpeg" alt="" title="ds3-speakers-2020-PEYRE-Gabriel" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-PEYRE-Gabriel.jpeg 1277w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-PEYRE-Gabriel-980x735.jpeg 980w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-PEYRE-Gabriel-480x360.jpeg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1277px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_8  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Gabriel PEYRÉ</h4>
               <p style={{ fontStyle: "italic" }}>Senior Researcher &#8211; CNRS, DMA, ENS</p>
               <p>Title: <strong>Computational Optimal Transport</strong></p>
               <p><strong>Slides : </strong><Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/gabriel_peyre_entropic_regularization.pdf" target="_blank" rel="noopener noreferrer">Entropic Regularization</Link> &amp; <Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/gabriel_peyre_theoretical_foundations.pdf" target="_blank" rel="noopener noreferrer">Theoretical Foundations</Link></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_7   et_pb_has_overlay">
              <Link to="https://www.cs.cmu.edu/~pradeepr/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-speakers-pradeepRAVIKUMAR.jpg" alt="" title="ds3-speakers-pradeepRAVIKUMAR" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-speakers-pradeepRAVIKUMAR.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-speakers-pradeepRAVIKUMAR-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-speakers-pradeepRAVIKUMAR-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_9  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Pradeep RAVIKUMAR</h4>
               <p style={{ fontStyle: "italic" }}>Associate Professor &#8211; Carnegie Mellon University</p>
               <p>Title: <strong>Robust machine learning</strong></p>
               <p>Slide : <Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/pradeep_ravikumar_robust_ml.pdf" target="_blank" rel="noopener noreferrer">Robust ML</Link></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_image et_pb_image_8   et_pb_has_overlay">
              <Link to="https://scholar.google.fr/citations?user=wN9rBkcAAAAJ&#038;hl=fr" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/12/gabriel-synnaeve.jpg" alt="" title="gabriel-synnaeve" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/12/gabriel-synnaeve.jpg 1827w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/12/gabriel-synnaeve-1280x958.jpg 1280w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/12/gabriel-synnaeve-980x734.jpg 980w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/12/gabriel-synnaeve-480x359.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1827px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_10  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Gabriel SYNNAEVE</h4>
               <p style={{ fontStyle: "italic" }}>Research Scientist &#8211; Facebook</p>
               <p>Title: <strong>Advances in end-to-end speech recognition</strong></p>
               <p><strong>Slide : </strong><Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/gabriel_synnaeve_advances_in_end_to_end_speech_recognition.pptx" target="_blank" rel="noopener noreferrer">Advances in end-to-end speech recognition</Link></p></div>
             </div>
            </div>
           </div>  <div className="et_pb_row et_pb_row_5">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_9   et_pb_has_overlay">
              <Link to="https://perso.limsi.fr/yvon/mysite/mysite.php" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-YVON-Francois-1.jpg" alt="" title="ds3-speakers-2020-YVON-Francois" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-YVON-Francois-1.jpg 791w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-speakers-2020-YVON-Francois-1-480x362.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 791px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_11  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>François YVON</h4>
               <p style={{ fontStyle: "italic" }}>Senior Researcher &#8211; LIMSI-CNRS</p>
               <p>Title: <strong>Recent advances in deep learning for NLP</strong></p>
               <p>Slide : <Link to="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/03/francois_yvon_NLP.pdf" rel="attachment wp-att-5660">Download</Link></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_13  et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column_empty">
            </div>
           </div>
          </div>  <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular" >
           <div className="et_pb_row et_pb_row_6">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_14  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_text et_pb_text_12  et_pb_text_align_center et_pb_bg_layout_dark">
              <div className="et_pb_text_inner"><h1 style={{ textAlign: "left" }}>Guests at the round table discussion</h1></div>
             </div>
            </div>
           </div>  <div className="et_pb_row et_pb_row_7">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_15  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_10   et_pb_has_overlay">
              <Link to="http://www.cmap.polytechnique.fr/~bacry/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-emmanuelBACRY.jpg" alt="" title="ds3-organizers-emmanuelBACRY" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-emmanuelBACRY.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-emmanuelBACRY-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-emmanuelBACRY-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_13  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Emmanuel BACRY</h4>
               <p><em>Senior Research Fellow &#8211; CNRS</em></p><br />
               <em>Chief Scientific Officer &#8211; Health Data Hub</em></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_16  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_11   et_pb_has_overlay">
              <Link to="https://www.casilli.fr" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Antonio-CASILLI.jpg" alt="" title="speakers-2020-Antonio-CASILLI" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Antonio-CASILLI.jpg 794w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Antonio-CASILLI-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 794px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_14  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Antonio CASILLI</h4>
               <p style={{ fontStyle: "italic" }}>Professor &#8211; Télécom Paris<br />
                Researcher &#8211; i3-CNRS</p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_17  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_image et_pb_image_12   et_pb_has_overlay">
              <Link to="http://laurence-devillers.com" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Laurence-DEVILLERS.jpg" alt="" title="speakers-2020-Laurence-DEVILLERS" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Laurence-DEVILLERS.jpg 794w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/08/speakers-2020-Laurence-DEVILLERS-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 794px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_15  et_pb_text_align_left et_pb_bg_layout_dark">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Laurence DEVILLERS</h4>
               <p style={{ fontStyle: "italic" }}>Professor &#8211; Paris-Sorbonne University<br />
                Researcher &#8211; LIMSI-CNRS</p></div>
             </div>
            </div>
           </div>
          </div>  <div className="et_pb_section et_pb_section_3 et_section_regular et_section_transparent" >
           <div className="et_pb_row et_pb_row_8">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_18  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_text et_pb_text_16  et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h1 style={{ textAlign: "left" }}>Speakers / Guests: In-depth Tutorials with Practical Sessions</h1></div>
             </div>
            </div>
           </div>  <div className="et_pb_row et_pb_row_9">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_19  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_13   et_pb_has_overlay">
              <Link to="https://qb3.github.io" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-BERTRAND-quentin-1.jpeg" alt="" title="ds3-speakers-2020-BERTRAND-quentin" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-BERTRAND-quentin-1.jpeg 800w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-BERTRAND-quentin-1-480x360.jpeg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_17  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Quentin BERTRAND</h4>
               <p style={{ fontStyle: "italic" }}>PhD Student &#8211; Inria<br />
                (<Link to="http://alexandre.gramfort.net">Alexandre Gramfort</Link>&#8216;s group)</p>
               <p>Title: <strong>Optimization for machine learning «hands on»</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_20  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_14   et_pb_has_overlay">
              <Link to="http://www.cmap.polytechnique.fr/~aymeric.dieuleveut/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-scientific-commmittee-2020-DIEULEVEUT-Aymeric-1.jpg" alt="" title="ds3-scientific-commmittee-2020-DIEULEVEUT-Aymeric" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-scientific-commmittee-2020-DIEULEVEUT-Aymeric-1.jpg 794w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/09/ds3-scientific-commmittee-2020-DIEULEVEUT-Aymeric-1-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 794px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_18  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Aymeric DIEULEVEUT</h4>
               <p style={{ fontStyle: "italic" }}>Assistant Professor &#8211; CMAP, École polytechnique</p>
               <p>Title: <strong>Stochastic Optimization</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_21  et_pb_css_mix_blend_mode_passthrough et-last-child">
             <div className="et_pb_module et_pb_image et_pb_image_15   et_pb_has_overlay">
              <Link to="https://dioscuri-tda.org/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-PawelDLOTKO.jpg" alt="" title="ds3-speakers-PawelDLOTKO" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-PawelDLOTKO.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-PawelDLOTKO-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-PawelDLOTKO-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_19  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Pawel DLOKTO</h4>
               <p style={{ fontStyle: "italic" }}>Director &#8211; Dioscuri Centre on TDA, Polish Academy of Sciences</p>
               <p>Title: <strong>Topological Data Analysis</strong></p></div>
             </div>
            </div>
           </div>  <div className="et_pb_row et_pb_row_10">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_22  et_pb_css_mix_blend_mode_passthrough">
             <div className="et_pb_module et_pb_image et_pb_image_16   et_pb_has_overlay">
              <Link to="https://fortuin.github.io/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/portrait_VF_2020_sq.jpg" alt="" title="portrait_VF_2020_sq" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/portrait_VF_2020_sq.jpg 1500w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/portrait_VF_2020_sq-1280x961.jpg 1280w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/portrait_VF_2020_sq-980x736.jpg 980w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/portrait_VF_2020_sq-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1500px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_20  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Vincent FORTUIN</h4>
               <p style={{ fontStyle: "italic" }}>PhD Student &#8211; ETH Zürich<br />
                (<Link to="https://bmi.inf.ethz.ch/people/person/gunnar-raetsch/">Gunnar Rätsch</Link> and <Link to="https://las.inf.ethz.ch/krausea">Andreas Krause</Link>&#8216;s group)</p>
               <p>Title: <strong>Deep Generative Models for Representation Learning</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_23  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_17   et_pb_has_overlay">


              <Link to="http://alexandre.gramfort.net" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/05/GRANFORT_Alexandre_w.jpg" alt="" title="GRANFORT_Alexandre_w" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/05/GRANFORT_Alexandre_w.jpg 794w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/05/GRANFORT_Alexandre_w-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/05/GRANFORT_Alexandre_w-768x576.jpg 768w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/05/GRANFORT_Alexandre_w-510x382.jpg 510w" sizes="(max-width: 794px) 100vw, 794px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_21  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Alexandre GRAMFORT</h4>
               <p style={{ fontStyle: "italic" }}>Researcher &#8211; Inria</p>
               <p>Title: <strong>Optimization for machine learning «hands on»</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_24  et_pb_css_mix_blend_mode_passthrough et-last-child">


             <div className="et_pb_module et_pb_image et_pb_image_18   et_pb_has_overlay">


              <Link to="http://ogrisel.com" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Olivier-GRISEL.jpg" alt="" title="speakers-guests-2019-Olivier-GRISEL" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Olivier-GRISEL.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Olivier-GRISEL-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Olivier-GRISEL-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_22  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Olivier GRISEL</h4>
               <p style={{ fontStyle: "italic" }}>Software Engineer &#8211; Inria</p>
               <p>Title: <strong>Introduction to Deep Learning with Keras and Tensorflow</strong></p></div>
             </div>
            </div>


           </div>  <div className="et_pb_row et_pb_row_11">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_25  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_19   et_pb_has_overlay">


              <Link to="https://www.seas.upenn.edu/~hassani/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Hamed-HASSANI.jpg" alt="" title="speakers-guests-2019-Hamed-HASSANI" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Hamed-HASSANI.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Hamed-HASSANI-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2019/02/speakers-guests-2019-Hamed-HASSANI-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_23  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Hamed HASSANI</h4>
               <p style={{ fontStyle: "italic" }}>Assistant Professor &#8211; University of Pennsylvania</p>
               <p>Title: <strong>Algorithms, Theory, and Applications of Submodular Optimization: From Discrete to Continuous and Back</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_26  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_20   et_pb_has_overlay">


              <Link to="https://mavt.ethz.ch/the-department/people/person-detail.MjIzNjMy.TGlzdC81NTksLTY5MzYxOTMw.html" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-HEWING-Lukas.png" alt="" title="ds3-speakers-2020-HEWING-Lukas" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-HEWING-Lukas.png 1139w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-HEWING-Lukas-980x734.png 980w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-HEWING-Lukas-480x359.png 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1139px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_24  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Lukas HEWING</h4>
               <p style={{ fontStyle: "italic" }}>PostDoc &#8211; ETH Zürich<br />
                (<Link to="https://idsc.ethz.ch/the-institute/people/person-detail.html?persid=142737">Melanie Zeilinger</Link>&#8216;s group)</p>
               <p>Title: <strong>Safe Learning for Control</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_27  et_pb_css_mix_blend_mode_passthrough et-last-child">


             <div className="et_pb_module et_pb_image et_pb_image_21   et_pb_has_overlay">


              <Link to="http://kurlin.org/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-VitalyKURLIN.jpg" alt="" title="ds3-speakers-VitalyKURLIN" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-VitalyKURLIN.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-VitalyKURLIN-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-VitalyKURLIN-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_25  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Vitaliy KURLIN</h4>
               <p style={{ fontStyle: "italic" }}>Associate Professor &#8211; University of Liverpool<br />
                Data Scientist &#8211; Materials Innovation Factory</p>
               <p>Title: <strong>Topological Data Analysis</strong></p></div>
             </div>
            </div>


           </div>  <div className="et_pb_row et_pb_row_12">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_28  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_22   et_pb_has_overlay">


              <Link to="https://scholar.google.fr/citations?user=_XE1LvQAAAAJ&#038;hl=fr" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-ericMOULINES.jpg" alt="" title="ds3-organizers-ericMOULINES" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-ericMOULINES.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-ericMOULINES-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2017/02/ds3-organizers-ericMOULINES-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_26  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Eric MOULINES</h4>
               <p style={{ fontStyle: "italic" }}>Professor &#8211; École polytechnique</p>
               <p>Title: <strong>Stochastic Optimization</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_29  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_23   et_pb_has_overlay">


              <Link to="https://varao.github.io/index.html" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-RAO-Vinayak.jpg" alt="" title="ds3-speakers-2020-RAO-Vinayak" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-RAO-Vinayak.jpg 859w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-RAO-Vinayak-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 859px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_27  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Vinayak RAO</h4>
               <p style={{ fontStyle: "italic" }}>Associate Professor &#8211; Purdue University</p>
               <p>Title: <strong>Modern Bayesian methods: principles and practice</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_30  et_pb_css_mix_blend_mode_passthrough et-last-child">


             <div className="et_pb_module et_pb_image et_pb_image_24   et_pb_has_overlay">


              <Link to="https://github.com/VincentRouvreau" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/vincent_rouvreau.jpg" alt="" title="vincent_rouvreau" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/vincent_rouvreau.jpg 920w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/vincent_rouvreau-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/vincent_rouvreau-768x576.jpg 768w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/vincent_rouvreau-510x382.jpg 510w" sizes="(max-width: 920px) 100vw, 920px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_28  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Vincent ROUVREAU</h4>
               <p style={{ fontStyle: "italic" }}>Research Software Engineer &#8211; Inria</p>
               <p>Title: <strong>Topological Data Analysis</strong></p></div>
             </div>
            </div>


           </div>  <div className="et_pb_row et_pb_row_13">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_31  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_25   et_pb_has_overlay">


              <Link to="http://kurlin.org/#Krasen" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-KrasenSAMARDZHIEV.jpg" alt="" title="ds3-speakers-KrasenSAMARDZHIEV" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-KrasenSAMARDZHIEV.jpg 640w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-KrasenSAMARDZHIEV-300x225.jpg 300w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2018/04/ds3-speakers-KrasenSAMARDZHIEV-510x382.jpg 510w" sizes="(max-width: 640px) 100vw, 640px" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_29  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Krasen SAMARDZHIEV</h4>
               <p style={{ fontStyle: "italic" }}>PhD student &#8211; University of Liverpool<br />
                (<Link to="http://kurlin.org/">Vitaliy Kurlin</Link>&#8216;s group)</p>
               <p>Title: <strong>Topological Data Analysis</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_32  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_26   et_pb_has_overlay">


              <Link to="https://djsutherland.ml/" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-SUTHERLAND-Dougal.jpg" alt="" title="ds3-speakers-2020-SUTHERLAND-Dougal" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-SUTHERLAND-Dougal.jpg 953w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/ds3-speakers-2020-SUTHERLAND-Dougal-480x360.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 953px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_30  et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>D.J. SUTHERLAND</h4>
               <p style={{ fontStyle: "italic" }}>Assistant Professor &#8211; University of British Columbia</p>
               <p>Title: <strong>Kernel Methods: From Basics to Modern Applications</strong></p></div>
             </div>
            </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_33  et_pb_css_mix_blend_mode_passthrough et-last-child">


             <div className="et_pb_module et_pb_image et_pb_image_27   et_pb_has_overlay">


              <Link to="https://scholar.google.fr/citations?user=L7qb6ToAAAAJ&#038;hl=en" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2020/10/Flavian-Vasile-web-®-St®phanie-Knibbe-6877.jpg" alt="" title="Flavian-Vasile-web-®-St®phanie-Knibbe-6877" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_31  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}>Flavian VASILE</h4>
               <p style={{ fontStyle: "italic" }}>Criteo</p>
               <p>Title: <b>Modern Recommendation for Advanced Practitioners</b></p></div>
             </div>
            </div>


           </div>  <div className="et_pb_row et_pb_row_14">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_34  et_pb_css_mix_blend_mode_passthrough">


             <div className="et_pb_module et_pb_image et_pb_image_28   et_pb_has_overlay">


              <Link to="https://idsc.ethz.ch/the-institute/people/person-detail.html?persid=142737" target="_blank"><span className="et_pb_image_wrap "><img src="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/01/Melanie_Zeilinger.jpg" alt="" title="Melanie_Zeilinger" srcset="https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/01/Melanie_Zeilinger.jpg 1280w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/01/Melanie_Zeilinger-980x653.jpg 980w, https://www.ds3-datascience-polytechnique.fr/wp-content/uploads/2021/01/Melanie_Zeilinger-480x320.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1280px, 100vw" /><span className="et_overlay et_pb_inline_icon" data-icon=""></span></span></Link>
             </div><div className="et_pb_module et_pb_text et_pb_text_32  et_pb_text_align_left et_pb_bg_layout_light">


              <div className="et_pb_text_inner"><h4 style={{ borderBottom: "1px dotted #333", paddingBottom: "3px" }}> Melanie ZEILINGER</h4>
               <p style={{ fontStyle: "italic" }}> Assistant Professor &#8211; ETH Zürich</p>
               <p>Title: <strong>Safe Learning for Control</strong></p></div>
             </div>  </div>  <div className="et_pb_column et_pb_column_1_3 et_pb_column_35  et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">



            </div><div className="et_pb_column et_pb_column_1_3 et_pb_column_36  et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column_empty">
            </div>
           </div>
          </div> 	</div>
        </div>
       </div><div className="at-below-post-page addthis_tool" data-url="https://www.ds3-datascience-polytechnique.fr/speakers/"></div> 					</div>
     </article >
    </div >
   </div >
   <Footer />
  </>
 )

}
export default Speakers;
