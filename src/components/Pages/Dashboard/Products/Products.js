// import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as Icons from '@fortawesome/free-solid-svg-icons';



// export default function Products() {
//     const iconList = Object
//   .keys(Icons)
//   .filter(key => key !== "fas" && key !== "prefix" )
//   .map(icon => Icons[icon])

// library.add(...iconList)

//   return (
//     <div>
//       fdgd
//       <FontAwesomeIcon icon="face-dizzy" />
//     </div>
//   )
// }

import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { User } from "../../website/auth/Context/UserContext";

//first thing we make an componetn which its name like the name of the function 
export default function Products() {

 //in react when we need to declare an variable we make an usestate like array have to paramter 
const [Products,setProducts]=useState([])
const [runUseEffect,setRun]=useState(0)

const context=useContext(User);
const token=context.auth.token;
//useState takes two variabls first is an pramter {string} sec is an function / useState( take the value of first paramter) 
//setUsers تستعمل لتغيير القيمة الافتراضية []

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
},[runUseEffect]);// [] run useeffect once even if there is usestate
//we use another usestate runUseEffect to avoid loop when we delete an user insted of using users 
//du to users will make useeffect run every time users are changed 

async function deleteProduct(id){
 //use try and chatch due to url will make a time to execute in brwser so try and when it finishs do if con..

 try {

   const res=await axios.delete(
     `http://127.0.0.1:8000/api/product/delete/${id}`,{
     headers: {
      
       Authorization: 'Bearer ' + token
     }
    
     });
   if (res.status===200) {
     //if res 200 {ok} run usestate and make prevuios value = prev+1 to make changen and run usestate

      setRun((prev)=>  prev+1)

     
   }
 } catch(err) {
   console.log(err);

 }

}
//make loop to data using map to show them 
const showProducts=Products.map((Product , index)=>(
//each child should have a key 
 <tr className="text-center" key={index}>
   <td >{index+1}</td>
   <td>{Product.title}</td>
   <td>{Product.description}</td>
   <td>{Product.price}</td>
   <td className="text-center">
   <img style={{height:"200px",width:"200px"}} src={Product.image} alt=""/>
   </td>
   

   <td className='table-active'  >
     
<Icon.TrashFill size={25} color='red' title="Delete" className='me-2' style={{cursor:"pointer"}} 
onClick={()=>deleteProduct(Product.id)} />
<Link to={`${Product.id}`}>
<Icon.ArrowUpCircleFill size={25} color='green' title="Update" />   
</Link>
      </td>
 </tr>
))



   return(
     <>
     
     <div className='col-auto  col-md-8 col-xl-9 mx-auto'>
     <div className='pt-4'>
         <table className="table table-bordered border-primary ">
         <thead>
           <tr>
             <th scope="col">ID</th>
             <th scope="col" className="text-center">Title</th>
             <th scope="col" className="text-center">Description</th>
             <th scope="col" className="text-center">price</th>
             <th scope="col" className="text-center">Image Of Product</th>

             <th className='table-active' scope="col">Action</th>
           </tr>
         </thead>
         <tbody>
          {showProducts}
         </tbody>
       </table>
       </div>
       </div>
     
     </>
   
     )
 }

