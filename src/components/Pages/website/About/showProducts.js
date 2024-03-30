import Header from '../../../Header/Header'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { User } from "../../website/auth/Context/UserContext";
export default function About() {


  const [Products,setProducts]=useState([])
 
  
  const context=useContext(User);
  const token=context.auth.token;
  useEffect(()=> { //make an useEffect fun to bring data and it takes two pramter its fun and []
    axios
    .get("http://127.0.0.1:8000/api/product/show",{
      headers: {
        Accept:"application/json",
        Authorization: 'Bearer ' + token
      }
     
    }) //fetch url from backend
  // .then((res)=>res.json()) // we get url then convert data to json 
  .then((data)=> setProducts(data.data)); // then log this info {data is an variable}
 },[]);// [] run useeffect once even if there is usestate
 //we use another usestate runUseEffect to avoid loop when we delete an user insted of using users 
 //du to users will make useeffect run every time users are changed 
 

 const showProducts=Products.map((Product , index)=>(
 //each child should have a key 
 <div className='mt-4 mb-4  col-sm-8 col-md-6 col-lg-4  col-xl-2'>
 <div className="col" key={index} >
    <div className="card h-100">
    <img className='card-img-top w-100' style={{height:"200px"}} src={Product.image} alt=""/> 
                <div className="card-body">
        <h5 className="card-title">{Product.title}</h5>
            <p className="card-text">{Product.description}</p>
      </div>
      <div className="card-footer bg-transparent border-success">
      <p className="card-text">price : {Product.price} $</p>
      {/* <div className="text-center" aria-label="Basic example">

  <button type="button" className="btn btn-success">add to cart</button>
</div> */}
        
        </div>
    </div>
    
  </div>
  </div>

 
))

  return (
    <>
         <Header />

         
         
         
      <div className='container-fluid '>
        <div className='d-flex'>
        <div className='row'>
      {showProducts}
      </div>
      </div>
      </div>
       
  


</>



 
  )
}
