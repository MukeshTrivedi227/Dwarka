import React from 'react'
import { Link } from 'react-router-dom'

export default function Aboutus() {
  return (
    <main id="main">
 
    <section id="breadcrumbs" class="breadcrumbs">
      {/* <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>About</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>About</li>
          </ol>
        </div>

      </div> */}
    </section>

   
    <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-12">
            <h2 style={{textAlign: "center"}}>ABOUT US</h2>
            

          </div>
          <div class="col-lg-12">
          <div class="pic"><img src="assets/img/team/aboutus.jpg" class="img-fluid" alt=""/></div>
          </div>
          <div class="col-lg-12">
            <p>
            Azziptech is software consultancy provides strategy, design, building, and sometimes implementation of software that solves business problems to grow your business smoothly.
            We provide analyze and then solve major technical problems of a business. Based on our analyses, we suggest better software or hardware solutions for businesses. Azziptech is also providing dedicated experienced software developer for your projects and takes 100% responsibility from design to deploy of your software project.
            Azziptech is doing product development and provide dedicated developers. We will provide you the profiles, you choose, evaluate and hire.
            We are working on all major technologies and we have worldwide happy clients.
            </p>
            </div>
        </div>

      </div>
    </section>
    
   

     

  </main>
  )
}
