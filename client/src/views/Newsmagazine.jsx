import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom'

export default function Newsmagazine() {
  const [Industries,setIndustries]= useState([]);
const location = useLocation()
const industrie_id=location.pathname.split("/")[2];
  let i=1; 

   useEffect(()=>{          
       fatchUsers();
   },[industrie_id]);

   const fatchUsers= async()=>{
 
    try{
        const res = await axios.get("/industries/"+industrie_id);
        setIndustries(res.data);   
              
    }catch(err){
        alert(err)
    }            
}

  return (
    <main id="main">
     <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
      </div>
      </section>

      <section id="services" class="services">
      <div class="container">
      <h1 style={{textAlign: "center"}}> {Industries.industrie_name} </h1>
        <div class="row">
          <div class="col-md-12">
            {/* <div class="icon-box"> */}
            <div class="pic">
            {/* <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/> */}
            <img src= {"/upload/"+Industries.industrie_image}class="img-fluid" />
            {/* <img src={"/upload/"+service.service_image} alt='mukesh' width="100" height="100"></img> */}
            {/* value={service_image} */}
            </div>
              
            {/* </div> */}
          </div>
          <div class="col-md-12">
            
             <p class="mb-5" style={{textalign: "justify;",fontSize:16}}>{Industries.industrie_description}</p>
          </div>
          
          
        </div>

      </div>
    </section>
    </main>
          

  )
}  
//     <main id="main">
//     <section id="breadcrumbs" class="breadcrumbs">
//      <div class="container">
//      </div>
//      </section>

//      <section id="services" class="services">
//      <div class="container">
//      <h1> NEWS & MAGAZINE</h1>
//        <div class="row">
//          <div class="col-md-12">
           
//            <div class="pic">
//            <img src="assets/img/slide/slide-2.jpg" class="img-fluid" alt=""/>
           
             
//            </div>
//          </div>
//          <div class="col-md-12">
           
//             <p class="mb-5" style={{textalign: "justify;"}}>Azzip Tech Web Solutions offers custom web application development maintenance that helps client to best technical infrastructure for the benefit of organizational progress and effective implementation of strategic decision makingWe at UBM Infotech Web deliver highly sophisticated and professional PHP web development and deal with comprehensive client requirements.
// We, at UBM Infotech Web deliver highly sophisticated and professional PHP web development and deal with comprehensive client requirements.
// While these platforms are preferred for their efficiency and cost-effectiveness, the web developer team is also well versed in developing the web development programs based on the popular open source web programming scripting languages like PHP with Open source database like MySQL. We have experienced web developer team members, who have many years of expertise in providing only high quality web development services to clients.</p>
//          </div>
         
         
//        </div>

//      </div>
//    </section>
//    </main>
   
//   )
// }
