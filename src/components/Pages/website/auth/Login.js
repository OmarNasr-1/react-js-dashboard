import React, {  useContext, useState } from 'react'
import Header from '../../../Header/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { User } from './Context/UserContext'
import Cookies from 'universal-cookie'




export default function Login() {
 
 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [accept, setAccept] = useState(false)
  const [Err, setErr] = useState(false)

const nav =useNavigate();

const cookie = new Cookies();
const userNow = useContext(User);

//COOKIE




 

  // const form={ 
  //     background:"red",
  // }


 


async  function submit(e) {
      // let flag =true;
      e.preventDefault();
      setAccept(true);
      // setAccept(true);
      // if (name === ' ' || name.length <3 || password.length < 8 ||  passwordR !== password){
      //     flag=false;

      // } else flag=true;
      try {
     
         let res =await axios.post('http://127.0.0.1:8000/api/login',{
          
              email:email,
              password:password,
             
          });
          const token=res.data.data.token;
          cookie.set("Bearer" , token);
          const userDetails=res.data.data.user;
           userNow.setAuth({token,userDetails});
      nav("/Home")          


  }   catch(err){
     if (err.response.status === 401) {
      setErr(true);
     
     }
     setAccept(true);
  }
  
 
  }
return (
  <>
  
    <Header/>
            
      
              <div className="container " >
              <div className="d-flex justify-content-center align-items-center " >
                  <div className="mt-1">
                          <div
                              className="card shadow-lg p-5 m-5 bg-body   text-black "
                              style={{ borderRadius: "25px" }}
                          >
                              <div className="card-body p-md-1">
                                  <div className="row justify-content-center">
                                      <div className="col-auto  order-2 order-lg-1">
                                          <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-2">
                                              Sgin In
                                          </p>

                                          <form

                                          // style={props.form && form}

                                              onSubmit={submit}
                                              className="mx-1 mx-md-4"
                                          >
                                              <div className="d-flex flex-row align-items-center mb-4">
                                                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                 
                                              </div> 

                                              <div className="d-flex flex-row align-items-center mb-4">
                                                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                  <div className="form-outline flex-fill mb-0">
                                                      <input
                                                      onChange={(e) => setEmail(e.target.value) }
                                                          type="email"
                                                          value={email}
                                                          placeholder="Your Email"
                                                          required
                                                          className="form-control"
                                                      />

                                                  </div>
                                              </div>

                                              <div className="d-flex flex-row align-items-center mb-4">
                                                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                  <div className="form-outline flex-fill mb-0">
                                                      <input
                                                      onChange={(e) => setPassword(e.target.value) }
                                                          type="password"
                                                          value={password}
                                                          placeholder="Your Password"
                                                          className="form-control"
                                                      />
                                                    { password.length < 8 && accept && <div className="alert alert-danger" role="alert">password must be at least 8 characters </div> }
                                                      
                                                  </div>
                                              </div>

                                         
         

                                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                  <button
                                                      type="submit"
                                                      className="btn btn-outline-primary btn-lg"
                                                  >
                                                      LOGIN
                                                  </button>
                                              </div>
                                              { accept && Err && <div className="alert alert-danger" role="alert">wrong Email or password </div> }

                                          </form>
                                      </div>
                                      <div className="col-md-10 col-lg-6 col-xl-7  d-flex align-items-center order-1 order-lg-2">
                                          <img
                                          
                                         
                                          src={require("../../../../assits/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg")}
                                              className="img-fluid"
                                              alt="Sample"
                                          />
                                      </div>
                                  
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      
    
 
  </>
  )
}
