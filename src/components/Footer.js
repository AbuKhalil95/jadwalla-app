/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <>
      <footer class="flex-rw">

        <section class="footer-social-section flex-rw">
          <span class="footer-social-overlap footer-social-connect">CONNECT<span class="footer-social-small">with</span>US</span>
          <span class="footer-social-overlap footer-social-icons-wrapper">
            <a href="" class="generic-anchor" target="_blank" title="GitHub" ><i class="fa fa-github"></i></a>
            <a href="" class="generic-anchor" target="_blank" title="Facebook" ><i class="fa fa-facebook"></i></a>
            <a href="" class="generic-anchor" target="_blank" title="Twitter" ><i class="fa fa-twitter"></i></a>
            <a href="" class="generic-anchor" target="_blank" title="Instagram" ><i class="fa fa-instagram"></i></a>
            <a href="" class="generic-anchor" target="_blank" title="Youtube" ><i class="fa fa-youtube"></i></a>
            <a href="" class="generic-anchor" target="_blank" title="GooglePlus" ><i class="fa fa-google-plus"></i></a>
          </span>
        </section>
        <section class="footer-bottom-section flex-rw">
          <div class="footer-bottom-wrapper">
            <i class="fa fa-copyright" role="copyright">
            </i> 2020 Jadwaleh in <address class="footer-address" role="company address">Jordan,Amman</address><span class="footer-bottom-rights"> - All Rights Reserved - </span>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
