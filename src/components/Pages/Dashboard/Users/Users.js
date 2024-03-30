 import axios from "axios";
 import React, { useEffect, useState } from 'react'
import { useContext } from "react";
 import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { User } from "../../website/auth/Context/UserContext";

//first thing we make an componetn which its name like the name of the function 
export default function Users() {

  //in react when we need to declare an variable we make an usestate like array have to paramter 
const [users,setUsers]=useState([])
const [runUseEffect,setRun]=useState(0)

const context=useContext(User);
const token=context.auth.token;
 //useState takes two variabls first is an pramter {string} sec is an function / useState( take the value of first paramter) 
//setUsers تستعمل لتغيير القيمة الافتراضية []

  useEffect(()=> { //make an useEffect fun to bring data and it takes two pramter its fun and []
    axios
    .get("http://127.0.0.1:8000/api/user/show",{
      headers: {
        Accept:"application/json",
        Authorization: 'Bearer ' + token
      }
     
    }) //fetch url from backend
  // .then((res)=>res.json()) // we get url then convert data to json 
  .then((data)=> setUsers(data.data)); // then log this info {data is an variable}
},[runUseEffect]);// [] run useeffect once even if there is usestate
//we use another usestate runUseEffect to avoid loop when we delete an user insted of using users 
//du to users will make useeffect run every time users are changed 

async function deleteUser(id){
  //use try and chatch due to url will make a time to execute in brwser so try and when it finishs do if con..

  try {

    const res=await axios.delete(
      `http://127.0.0.1:8000/api/user/delete/${id}`,{
      headers: {
       
        Authorization: 'Bearer ' + token
      }
     
      });
    if (res.status===200) {
      //if res 200 {ok} run usestate and make prevuios value = prev+1 to make changen and run usestate

       setRun((prev)=>  prev+1)

      
    }
  } catch {
    console.log("none");

  }

}
//make loop to data using map to show them 
const showusers=users.map((user , index)=>(
//each child should have a key 
  <tr key={index}>
    <td>{index+1}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>

    <td className='table-active'  >
      
 <Icon.TrashFill size={25} color='red' title="Delete" className='me-2' style={{cursor:"pointer"}} 
 onClick={()=>deleteUser(user.id)} />
 <Link to={`${user.id}`}>
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
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th className='table-active' scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {showusers}
          </tbody>
        </table>
        </div>
        </div>
      
      </>
    
      )
  }
