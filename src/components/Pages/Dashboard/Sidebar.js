import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import "./dashboard.css"
// import Cookies from 'universal-cookie';
// import axios from 'axios';
export default function Sidebar() {

//     const cookie= new Cookies();
// const token=cookie.get("Bearer")

    // async function handelLougout(){
    //     await axios.post(
    //        `http://127.0.0.1:8000/api/logout`,null ,{
    //        headers: {
    //          Authorization: 'Bearer ' + token,
    //        },
    //        });
   
    //        cookie.remove('Bearer');
    //        window.location.pathname ="/Home"
    //    }

  return (
    <>
    <div className="col-auto ">
   
        <div className=" px-sm-2 px-0 bg-light   ">
            
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
              
                <ul className="nav nav-pills  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link  to="/dashboard" className="nav-link align-middle px-0">
                        <Icon.HouseFill title='home'  size={30}/>
   
  <span title='home' className="ms-2 d-none  d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/dashboard/users" className="nav-link align-middle px-0">
                    <Icon.PeopleFill title='Users' size={30} />
   
  <span  title='Users' className="ms-2 d-none  d-sm-inline">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/users/create"  className="nav-link px-0 align-middle">
                            <Icon.PersonFill  title='new user'  size={30}/> <span title='new user'  className="ms-1  d-none d-sm-inline">New User</span>
                            </Link>
                    </li>
                
                    <li>
                    <Link to="/dashboard/products" className="nav-link align-middle px-0">
                    <Icon.Grid title='Products' size={30} />
   
  <span  title='Products' className="ms-2  d-none d-sm-inline">Products</span>
                        </Link>
                    </li>
                    <li>
                                <Link to="/dashboard/products/create" className="nav-link px-0"> 
                                <Icon.PlusSquare title='Products' size={30} />
                                <span  className="ms-2  d-none d-sm-inline title='New Products'">New Products</span></Link>
                            </li>
                           

                   

                    <li>
                        <Link href="#" className="nav-link px-0 align-middle">
                            <Icon.People  size={30}/> <span className="ms-2 d-none d-sm-inline">Customers</span> </Link>
                    </li>
                </ul>
             
                {/* <div  className="dropdown pb-4 ">
                    
                    <Link href="#" className="text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                                                src={require("../../../assits/member-3.jpg")}
                                                className="img-fluid rounded "
                                                alt="Sample"
                                                style={{width:"30px",height:"35px"}}
                                            />
                        <span className="d-none d-sm-inline mx-1 text-dark">             
                                <Icon.ArrowUp size={20} color='gray'/>
</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" href="#">New project...</Link></li>
                        <li><Link className="dropdown-item" href="#">Settings</Link></li>
                        <li><Link className="dropdown-item" href="#">Profile</Link></li>
                        <li>
                            <div className="dropdown-divider"></div>
                        </li>
                        <li><Link className="dropdown-item" onClick={handelLougout}>Sign out</Link></li>
                    </ul>
                </div> */}
                
            </div>
        </div>
        
      
    </div>
  

</>
  )
}
