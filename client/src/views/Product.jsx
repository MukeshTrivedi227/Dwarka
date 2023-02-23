import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom'


export default function Product()
{
const [Products,setProduct]= useState([]);
const location = useLocation()
const product_id=location.pathname.split("/")[2];
  let i=1; 

   useEffect(()=>{          
       fatchUsers();
   },[product_id]);

   const fatchUsers= async()=>{
 
    try{
        const res = await axios.get("/Product/"+product_id);
        setProduct(res.data);   
              
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
      <h1 style={{textAlign: "center"}}> {Products.product_name} </h1>
        <div class="row">
          <div class="col-md-6">
            {/* <div class="icon-box"> */}
            <div class="pic">
            {/* <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/> */}
            <img src= {"/upload/"+Products.product_image} width="300" height="200"/>
            {/* <img src={"/upload/"+service.service_image} alt='mukesh' width="100" height="100"></img> */}
            {/* value={service_image} */}
            </div>
              
            {/* </div> */}
          </div>
          <div class="col-md-6">
            
             <p class="mb-5" style={{textAlign: "justify",fontSize:16}}>{Products.product_description}</p>
          </div>
          
          
        </div>

      </div>
    </section>
    </main>
          

  )
}  
