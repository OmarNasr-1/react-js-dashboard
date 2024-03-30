import './header.css'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { useContext } from 'react';
import { User } from '../Pages/website/auth/Context/UserContext';
// import * as Icon from 'react-bootstrap-icons';


export default function Header() {
const cookie= new Cookies();
const token=cookie.get("Bearer")



async function handelLougout(){
 await axios.post(
    `http://127.0.0.1:8000/api/logout`,null ,{
    headers: {
      Authorization: 'Bearer ' + token,
    },
    });
    cookie.remove('Bearer');
    window.location.pathname ="/Home"
}
  return (
<nav className=" navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   <div className='navbar-brand'>
    <img style={{width:"60px",height:"50px"}} src={require("../../assits/images.png")} alt='logo' />
   </div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/Home" className="nav-link px-3 me-2 fw-bold">
          Home
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/About" className="nav-link px-3 me-2 fw-bold">
          proudcts
        </Link>        </li>
        <li className="nav-item">

        </li>
      </ul>
    
      
      <div className=" d-flex align-items-center">
          
      
        
        
         
        <div  className="dropdown border rounded pe-2 ">
                    
                    <Link href="#" className="text-black
                     text-decoration-none 
                     dropdown-toggle" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false">
                    <img
                                                src={require("../../assits/comvzhssmyverizon.png")}
                                                className="img-fluid rounded "
                                                alt="Sample"
                                                style={{width:"50px",height:"40px"}}
                                            />
                  
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          { !token ? (
          <>
          <li>
             <Link to="/Login" className=" dropdown-item  btn btn-outline-primary px-3 me-2 fw-bold">
          Login
        </Link>
        </li> 

        <li> 
          <Link to="/Register" className=" dropdown-item btn btn-outline-primary me-3 fw-bold">
          Sign up 
        </Link> 
        </li> 
        </> 

 ):(
  <>
   <li> 
   <Link to="/dashboard" className="  dropdown-item btn btn-outline-primary me-3 fw-bold">
  dashboard
  </Link>
   </li> 

                 
<li>
  <Link className="dropdown-item" onClick={handelLougout}>
    Sign out
  </Link>
  </li>
  </>

)}
       

      </ul>
      </div>  

       
       
       



     
      </div>

    </div>
  </div>
</nav>

  )
}
