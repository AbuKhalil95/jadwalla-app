/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
  return (
    <>
      <footer className="page-footer font-large  unique-color-dark navbar navbar-default navbar-static-bottom navbar-fixed-bottom bg-dark ">
        <div className="container bg-dark d-flex justify-content-center  ">
          <div className="row ">
            <div className="col-12 py-3 ">
              <h4 className=" col-12 contact-us text-center py-3 ">Contact Us </h4>
              <div className="col-12 mb-15 text-center" >
                <a className="fb-ic"><i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a className="tw-ic"><i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a className="gplus-ic"><i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a className="li-ic"><i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a className="ins-ic"><i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a className="pin-ic"><i className="fab fa-github fa-lg white-text fa-2x"></i></a>
              </div>
              <div className=" col-12 footer-copyright text-center py-3 bg-dark"> All Copyright Reserved © 2020 : <a href="" target="_blank"> Jadwaleh.com </a>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
