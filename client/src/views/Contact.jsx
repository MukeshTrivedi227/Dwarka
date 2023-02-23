import React from 'react'

export default function Contact() {
  return (
    <main id="main">
     <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
      </div> 
      </section>

      <section id="services" class="services">
      <div class="container">
      <h1> CONTACT US</h1>
        <div class="row">
          <div class="col-md-3">
            <div class="icon-box">
            <h4 class="mb-2 box-title">Our Address</h4>
            <ul class="list-unstyled">
          <li style={{fontsize: "16px;",textAlign:"justify"}}>
          <b>412, 4th Floor, Meridian Square, Parimal Chowk,<br></br>
          Besides Home School, Waghawadi Road, Bhavnagar, Gujarat. 364001</b></li></ul>
            
              
            </div>

          </div>
          {/* <div class="bg-white box-shadow text-center p-5 px-md-2 px-lg-5" style={{height: "314px;"}}>
          <i class="fa-solid fa-location-dot text-primary icon-lg mb-4"></i>
          </div> */}
          <div class="col-md-3">
            <div class="icon-box">
            {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/></div> */}
            <div class="bg-white box-shadow text-center p-5 px-md-2 px-lg-5">
               {/* <i class="fa fa-envelope text-primary icon-lg mb-4"></i> */}
            <h4 class="mb-2 box-title">Message Us</h4><ul class="list-unstyled">
            <li style={{fontsize: "17px;"}}><b>
            <a href="mailto:azziptech@gmail.com" style={{color: "darkblue;"}}>azziptechnology@gmail.com</a><br></br>
            <a href="mailto:ubminfotech@gmail.com" style={{color: "darkblue;"}}>ubminfotech@gmail.com</a></b></li></ul></div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="icon-box">
            {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/></div> */}
            <div class="bg-white box-shadow text-center p-5 px-md-2 px-lg-5">
            <i class="fa fa-phone text-primary icon-lg mb-4"></i>
            <h4 class="mb-2 box-title">Phone Number</h4><ul class="list-unstyled">
            <li style={{fontsize: "17px;"}}><b>
            <a href="tel:+917016115489" style={{color: "darkblue;"}}>+917016115489</a><br></br>
            <a href="tel:+918799401233" style={{color: "darkblue;"}}>+918799401233</a></b></li></ul></div>  
            </div>
          </div>
          
          
          
        </div>
        
      </div>
      
    </section>
    <section id="contact" class="contact">
    <div class="container">

        <div>
          <iframe style={{border:"0", width:"100%", height: "270px"}} 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
     
     </section>  
          
          </main>
  )
}
