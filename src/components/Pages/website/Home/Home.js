import React from 'react'
import './home.css'
import Header from '../../../Header/Header'
import * as Icon from 'react-bootstrap-icons';

export default function Home() {
  return (
    <div className='home'>
         <Header />
         <div id="Home" className="landing-slid position-relative">
            
            <div
               id="carouselExampleFade"
               className="carousel slide carousel-fade"
               data-bs-ride="carousel"
            >
               <div className="carousel-inner slider">
                  <div
                     className="carousel-item active"
                     data-text="We build great brands."
                  ></div>
                  <div
                     className="carousel-item"
                     data-text="Focused on strategy."
                  ></div>
                  <div
                     className="carousel-item"
                     data-text="Advanced in digital works."
                  ></div>
               </div>
            </div>
         </div>
         <div className="btngroup-fixed">
         <button
            className="next border"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide='next'
         >
            <Icon.ArrowBarRight size={20} color='gray'/>
            <span className="visually-hidden">Next</span>
         </button>
         <button
            className="prev border-top-0 border"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
         >
            <Icon.ArrowBarLeft size={20} color='gray'/>
            <span className="visually-hidden">Previous</span>
         </button>
      </div>
      
    </div>
  )
}
