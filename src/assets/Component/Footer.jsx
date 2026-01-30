import React from 'react'

export default function Footer() {
  return (
    <div className="container-fluid  p-0 ">

        <footer className="footer text-white text-center text-lg-start">
          <div className="container-fluid footer-top ">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
                <h3 className="text-uppercase mb-2 pt-4">LOCATION</h3>
                <p>
                  2215 John Daniel Drive
                </p>
                <p>
                  Clark, MO 65243
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
                <h2 className="text-uppercase  mb-2 pt-4">AROUND THE WEB</h2>
                <div >
                  <a  className="btn btn-outline-light btn-floating rounded-circle m-1 " href="#!" role="button"><i  className="fab fa-facebook-f"></i></a>
                  <a  className="btn btn-outline-light btn-floating rounded-circle m-1" href="#!" role="button"><i  className="fab fa-twitter"></i></a>
                  <a  className="btn btn-outline-light btn-floating rounded-circle m-1" href="#!" role="button"><i  className="fab fa-linkedin-in"></i></a>
                  <a  className="btn btn-outline-light btn-floating rounded-circle m-1" href="#!" role="button"><i  className="fa fa-globe"></i></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
                <h3 className="text-uppercase mb-2 pt-4">ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

              </div>
            </div>
          </div>
          <div className="text-center p-3 copy-right" >
            Copyright © Your Website 2021

          </div>
        </footer>

      </div>
  )
}
