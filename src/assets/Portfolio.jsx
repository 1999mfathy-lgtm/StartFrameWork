import React from 'react'
import { port1,port2,port3} from '../assets/images/images.js';

export default function Portfolio() {
  return (
    <div className=" contact  py-4 mb-5">
      <div className="text-center">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder colored ">portfolio component</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center my-4">
        <div className="star-line "></div>
        <div className="star-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="star-line"></div>
      </div>


      <div className="container">
        <div className="row g-5">
          <div className="col-md-4  pic  ">
             <div className="position-relative">
            <img src={ port1} alt="" className="img-fluid rounded-12" />
            <div className="layer rounded-12 d-flex justify-content-center align-items-center">
              <span className='plus text-white'><i className="fa-solid fa-plus"></i></span>
            </div>
             </div>
          </div>
           <div className="col-md-4  pic  ">
             <div className="position-relative">
            <img src={port2} alt="" className="img-fluid rounded-12" />
            <div className="layer rounded-12 d-flex justify-content-center align-items-center">
              <span className='plus text-white'><i className="fa-solid fa-plus"></i></span>
            </div>
             </div>
          </div>
           <div className="col-md-4  pic  ">
             <div className="position-relative">
            <img src={port3} alt="" className="img-fluid rounded-12" />
            <div className="layer rounded-12  d-flex justify-content-center align-items-center">
              <span className='plus text-white'><i className="fa-solid fa-plus"></i></span>
            </div>
             </div>
          </div>
           <div className="col-md-4  pic  ">
             <div className="position-relative">
            <img src={port1} alt="" className="img-fluid rounded-12" />
            <div className="layer rounded-12 d-flex justify-content-center align-items-center">
              <span className='plus text-white'><i className="fa-solid fa-plus"></i></span>
            </div>
             </div>
          </div>
           <div className="col-md-4  pic  ">
             <div className="position-relative">
            <img src={port2} alt="" className="img-fluid rounded-12" />
            <div className="layer rounded-12 d-flex justify-content-center align-items-center">
              <span className='plus text-white'><i className="fa-solid fa-plus"></i></span>
            </div>
             </div>
          </div>
           <div className="col-md-4  pic  ">
             <div className="position-relative">
            <img src={port3} alt="" className="img-fluid rounded-12" />
            <div className="layer rounded-12 d-flex justify-content-center align-items-center">
              <span className='plus fs text-white'><i className="fa-solid fa-plus"></i></span>
            </div>
             </div>
          </div>
        </div>
      </div>



    </div>
  )
}
