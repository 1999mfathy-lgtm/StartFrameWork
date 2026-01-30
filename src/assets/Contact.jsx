import React from 'react'

export default function Contact() {
  return (
    <div className=" contact container py-4 mb-5">
      <div className="text-center">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder colored ">conatct section</h2>
        <div className="d-flex justify-content-center align-items-center my-4">
        <div className="star-line"></div>
        <div className="star-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="star-line"></div>
      </div>
      </div>

      <div className="contact-form mt-5">
        <form className="mx-auto">
          <div className="form-group mb-5 ">
            <input
              type="text"
              name="userName"
              placeholder="userName"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
          <div className="form-group mb-5">
            <input
              type="number"
              name="userAge"
              placeholder="userAge"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
          <div className="form-group mb-5">
            <input
              type="email"
              name="userEmail"
              placeholder="userEmail"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
          <div className="form-group mb-5">
            <input
              type="password"
              name="userPassword"
              placeholder="userPassword"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-color px-4 text-white ">
            send Message
          </button>
        </form>
      </div>
    </div>
  )
}
