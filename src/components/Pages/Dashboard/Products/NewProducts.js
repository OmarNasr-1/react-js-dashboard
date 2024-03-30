import axios from "axios";
import {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../website/auth/Context/UserContext";

export default function NewProduct() {
    const [title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const [accept,setAccept] = useState(false)
console.log(image);
    const nav =useNavigate();

const context=useContext(User);
const token =context.auth.token;



  async  function submit(e) {
        e.preventDefault();
        setAccept(true);
        try {
            const formData =new FormData();
            formData.append('title',title);
            formData.append('description',Description);
            formData.append('price',price);
            formData.append('image',image);

let res =await axios.post("http://127.0.0.1:8000/api/product/create",
            formData,
            
            {    headers: {
       
              Authorization: 'Bearer ' + token,
            },
           });

 nav("/dashboard/products")  
      
    }   catch(err){
    console.log(err) 
   
    setAccept(true);
    }
   
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
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 ">
                                            <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-2">
                                               New Product
                                            </p>

                                            <form

                                            // style={props.form && form}

                                                onSubmit={submit}
                                                className="mx-1 mx-md-4 "
                                            >
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                        onChange={(e) => setTitle(e.target.value) }
                                                            type="text"
                                                            value={title}
                                                            placeholder="title of proudect"
                                                            className="form-control"
                                                        />
                                            { title.length< 3  && accept && <div className="alert alert-danger" role="alert">name must be at least 3 characters</div> }

                                                    </div>
                                                </div> 


                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                        onChange={(e) => setPrice(e.target.value) }
                                                            type="text"
                                                            value={price}
                                                            placeholder=" price"
                                                            className="form-control"
                                                        />
                                            { price.length< 1  && accept && <div className="alert alert-danger" role="alert">name must be at least 3 characters</div> }

                                                    </div>
                                                </div> 

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                       
                                                        <input  onChange={(e) => setDescription(e.target.value) }
                                                            type="text"
                                                            value={Description}
                                                            placeholder="Your description"
                                                            
                                                            className="form-control"
                                                           

                                                            />
                               {/* { desc.length< 10 && accept && <div className="alert alert-danger" role="alert">description must be at least one word </div> } */}
 
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                        onChange={(e) => setImage(e.target.files.item(0)) }
                                                            type='file'
                                                            placeholder="Your image"
                                                            className="form-control"
                                                            
                                                        />
                               {/* { desc.length< 5 && accept && <div className="alert alert-danger" role="alert">description must be at least one word </div> } */}
 
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-outline-primary btn-lg"
                                                    >
                                                       Create proudect
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7  d-flex align-items-center order-1 order-lg-2">
                                            <img
                                            
                                           
                                            src={require("../../../../assits/add-item.png")}
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
