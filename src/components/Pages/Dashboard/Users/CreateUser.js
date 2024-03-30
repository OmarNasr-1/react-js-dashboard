import axios from "axios";
import {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../website/auth/Context/UserContext";

export default function CreateUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordR, setPasswordR] = useState('')
    const [accept,setAccept] = useState(false)
    const [EmailErrore,setEmailErrore] = useState(false)
    const nav =useNavigate();

//     useEffect(()=>{
      
//       setEmailErrore(email);

//   },[email]);
 

const context=useContext(User);
const token =context.auth.token;

  async  function submit(e) {
        // let flag =true;
        e.preventDefault();
        setAccept(true);
        // if (name === ' ' || name.length <3 || password.length < 8 ||  passwordR !== password){
        //     flag=false;

        // } else flag=true;
        try {
        // if (flag) {
            //send data
           let res =await axios.post("http://127.0.0.1:8000/api/user/create", {
                name:name,
                email:email,
                password:password,
                password_confirmation:passwordR,
            },
            {    headers: {
       
              Authorization: 'Bearer ' + token,
            },
           });

 nav("/dashboard/users")  
      
    }   catch(err){
      if (err.response.status === 422 ) {
        setEmailErrore(true);
       }   
    }
    setAccept(true);
    }
  return (
    <> 
      <section >
                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center ">
                       <div  className="col-md-10" >
                        
                            <div
                                className="card shadow-lg p-3 mb-5 bg-body rounde  text-black mt-5"
                                style={{ borderRadius: "25px" }}
                            >
                                <div className="card-body p-md-1">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-2">
                                               New User
                                            </p>

                                            <form

                                            // style={props.form && form}

                                                onSubmit={submit}
                                                className="mx-1 mx-md-4"
                                            >
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                        onChange={(e) => setName(e.target.value) }
                                                            type="text"
                                                            value={name}
                                                            placeholder="Your Name"
                                                            className="form-control"
                                                        />
                                            { name.length< 3  && accept && <div className="alert alert-danger" role="alert">name must be at least 3 characters</div> }

                                                    </div>
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
                               {  accept && EmailErrore && <div className="alert alert-danger" role="alert">Email is already taken </div> }
 
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

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                        onChange={(e) => setPasswordR(e.target.value) }
                                                            type="password"
                                                            value={passwordR}
                                                            placeholder="Repeat your password"
                                                            className="form-control"
                                                        />
                                                         { passwordR !== password  && accept && <div className="alert alert-danger" role="alert">password dosen't match </div> }
                                                    </div>
                                                </div>
                                                {/* 
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-outline-primary btn-lg"
                                                    >
                                                       Create User
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7  d-flex align-items-center order-1 order-lg-2">
                                            <img
                                            
                                           
                                            src={require("../../../../assits/user-account-sign-up-4489360-3723267.png")}
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
            </section>
      
    </>
  )
}
