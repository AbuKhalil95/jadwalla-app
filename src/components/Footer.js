/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
  return (
    <>
      <footer class="page-footer font-large cyan darken-3 unique-color-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-3">
              <h4 class="contact-us text-center py-3">Contact Us </h4>
              <div class="mb-15 text-center">
                <a class="fb-ic"><i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a class="gplus-ic"><i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
                <a class="pin-ic"><i class="fab fa-github fa-lg white-text fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3"> All Copyright Reserved © 2020 : <a href="" target="_blank"> Jadwaleh.com </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
