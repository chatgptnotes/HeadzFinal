'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

// Extend Window interface to include jQuery
declare global {
  interface Window {
    jQuery: any;
  }
}

const Footer: React.FC = () => {
  useEffect(() => {
    // Simple raindrop animation using CSS and JavaScript
    const createRaindrops = () => {
      const waterdrop = document.getElementById('waterdrop');
      if (!waterdrop) {
        console.log('Waterdrop element not found');
        return;
      }

      console.log('Creating raindrops animation...');

      // Clear any existing raindrops
      waterdrop.innerHTML = '';

      // Create canvas for raindrops
      const canvas = document.createElement('canvas');
      const containerWidth = waterdrop.offsetWidth || window.innerWidth;
      canvas.width = containerWidth;
      canvas.height = 50; // Match the height of waterdrop
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '1';
      waterdrop.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.log('Canvas context not available');
        return;
      }

      const raindrops: Array<{x: number, y: number, speed: number, size: number}> = [];

      // Create initial raindrops
      for (let i = 0; i < 15; i++) {
        raindrops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 3 + 2,
          size: Math.random() * 4 + 2
        });
      }

      // Animation function
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        raindrops.forEach((drop, index) => {
          // Update position
          drop.y += drop.speed;
          
          // Reset if raindrop goes off screen
          if (drop.y > canvas.height) {
            drop.y = -10;
            drop.x = Math.random() * canvas.width;
          }

          // Draw raindrop
          ctx.beginPath();
          ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.fill();

          // Draw splash effect when raindrop hits bottom
          if (drop.y > canvas.height - 8) {
            ctx.beginPath();
            ctx.arc(drop.x, canvas.height, drop.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fill();
          }
        });

        requestAnimationFrame(animate);
      };

      animate();
      console.log('Raindrops animation started!');
    };

    // Start animation after component mounts
    setTimeout(createRaindrops, 500);
  }, []);

  return (
    <>
      <style jsx>{`
        .page-wrapper {
          position: relative;
          width: 100%;
          z-index: 1;
        }

        footer p, footer strong, footer b, footer {
          color: #b0b0b0;
        }

        .footer-top {
          background: #000000;
          background-size: cover;
          background-position: center;
          padding: 0 0 20px;
          font-family: rubik;
          padding-top: 30px;
        }

        .footer-top, .footer-bottom {
          background: #000000;
        }

        .footer-bottom {
          padding: 15px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: #111111 !important;
          color: #b0b0b0;
          font-family: rubik;
        }

        .footer-site-info {
          font-size: 92.86%;
        }

        #footer-navigation, #footer-navigation li a:hover, .custom-footer, .custom-footer li a:hover {
          color: white;
        }

        #footer-navigation, #footer-navigation li a, .custom-footer, .custom-footer li a {
          color: #99a9b5;
          padding-top: 15px;
        }

        .footer-bottom ul {
          margin: 0;
        }

        .inline-inside {
          font-size: 0;
          line-height: 0;
        }

        .clearfix:after, .clearfix:before {
          content: "";
          display: table;
        }

        #footer-menu li {
          display: inline-block;
          padding: 0 21px;
          position: relative;
          line-height: 1;
        }

        #footer-menu li+li:before {
          content: '';
          width: 0;
          height: 100%;
          position: absolute;
          left: -1px;
          top: 0;
          font-size: 0;
          border-left: 1px solid #232234;
          border-right: 1px solid #333146;
        }

        #footer-socials {
          text-align: right;
        }

        #footer-socials .socials {
          text-align: right;
          margin: 0 -7px;
          display: inline-block;
          vertical-align: middle;
        }

        a.socials-item {
          display: inline-block;
          vertical-align: top;
          text-align: center;
          transition: all 0.3s;
          margin: 0 5px;
          line-height: 16px;
          padding: 10px;
          border-radius: 50%;
          background-color: #141421;
          border: 1px solid #2e2e4c;
          box-shadow: 3px 9px 16px rgb(0,0,0,0.4), -3px -3px 10px rgba(255,255,255, 0.06), inset 14px 14px 26px rgb(0,0,0,0.3), inset -3px -3px 15px rgba(255,255,255, 0.05);
        }

        .socials-item i {
          display: inline-block;
          font-weight: normal;
          width: 1em;
          height: 1em;
          line-height: 1;
          font-size: 16px;
          text-align: center;
          vertical-align: top;
          font-feature-settings: normal;
          font-kerning: auto;
          font-language-override: normal;
          font-size-adjust: none;
          font-stretch: normal;
          font-style: normal;
          font-synthesis: weight style;
          font-variant: normal;
          font-weight: normal;
          text-rendering: auto;
        }

        .facebook {
          color: #4e64b5;
        }

        .twitter {
          color: #00aced;
        }

        .instagram {
          color: #9a8f62;
        }

        .youtube {
          color: #c82929;
        }

        .telegram {
          color: #2ca5e0;
        }

        a.socials-item:hover {
          box-shadow: 0 0px 20px rgba(84, 1, 74, 0.7);
          border-color: rgba(255, 6, 224, 0.61);
          background: linear-gradient(to right, rgba(255, 9, 9, 0.12941176470588237), #c000ffb5, rgba(255, 0, 94, 0.14));
        }

        .footer-bottom a:hover {
          color: white;
        }

        footer p, footer li {
          font-size: 15px;
          line-height: 22px;
        }

        .widget {
          margin-bottom: 50px;
        }

        .footer-title {
          margin-bottom: 40px;
          color: #fff;
          font-weight: 500;
          text-transform: capitalize;
          padding-bottom: 15px;
          font-size: 16px;
          position: relative;
        }

        .footer-title:after {
          width: 50px;
          background: #fff;
          opacity: 0.2;
          height: 1px;
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
        }

        .gem-contacts-item {
          padding-top: 10px;
          font-size: 15px;
        }

        .gem-contacts-item i {
          padding-right: 10px;
        }

        footer .widget ul {
          list-style: none;
          margin-top: 5px;
        }

        .posts li {
          border-bottom: 1px solid #393d50;
          padding-bottom: 12px;
          padding-top: 6px;
        }

        .gem-pp-posts-date {
          color: #00bcd4;
          font-size: 89.5%;
        }

        footer p {
          line-height: 24px;
          margin-bottom: 10px;
          font-size: 15px;
        }

        .wpcf7-form-control-wrap .wpcf7-form-control {
          padding: 7px !important;
          width: 100%;
        }

        .wpcf7-form-control-wrap input {
          background: #1c1f2f;
          overflow: hidden;
          border: 1px solid #2e344d;
          background-color: #1c1f2f;
          box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03);
          border-radius: 5px;
          transition: all 0.3s ease-in-out 0s;
        }

        .wpcf7-form-control-wrap input:hover {
          background-color: transparent;
          box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03), inset 14px 14px 70px rgb(0,0,0,0.2), inset -15px -15px 30px rgba(255,255,255, 0.04);
          border-color: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .wpcf7 .wpcf7-form .contact-form-footer textarea {
          height: 160px;
          width: 100%;
        }

        .wpcf7-form-control-wrap textarea:hover {
          background-color: transparent;
          box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03), inset 14px 14px 70px rgb(0,0,0,0.2), inset -15px -15px 30px rgba(255,255,255, 0.04);
          border-color: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .wpcf7-form-control-wrap textarea {
          background: #1c1f2f;
          overflow: hidden;
          border: 1px solid #2e344d;
          background-color: #1c1f2f;
          box-shadow: 10px 10px 36px rgb(0,0,0,0.5), -13px -13px 23px rgba(255,255,255, 0.03);
          border-radius: 5px;
          transition: all 0.3s ease-in-out 0s;
        }

        textarea {
          overflow: auto;
          resize: vertical;
        }

        .wpcf7 .wpcf7-form .contact-form-footer .wpcf7-submit {
          width: 100%;
          padding: 11px;
          margin: 0;
          line-height: 0;
        }

        .wpcf7-form .contact-form-footer .wpcf7-submit {
          background-color: #394050;
          color: #99a9b5;
          border: none;
          cursor: pointer;
          padding: 15px 40px;
          font-size: 14px;
          font-weight: 400;
          transition: all 0.5s;
          letter-spacing: 2px;
          color: rgba(255,255,255,.5);
          box-shadow: none;
          text-transform: uppercase;
          outline: none !important;
          background-color: #1c1f2f;
          border-radius: 5px;
          min-width: 140px;
          box-shadow: 3px 9px 16px rgb(0,0,0,0.4), -3px -3px 10px rgba(255,255,255, 0.06), inset 14px 14px 26px rgb(0,0,0,0.3), inset -3px -3px 15px rgba(255,255,255, 0.05);
          border-width: 1px 0px 0px 1px;
          border-style: solid;
          border-color: #2e344d;
          transition: all 0.3s ease-in-out 0s;
        }

        .wpcf7-form input[type=submit] {
          height: 40px;
          line-height: 21px;
          padding: 10px 40px;
          font-size: 14px;
        }

        .posts li a {
          color: #99a9b5;
        }

        .wpcf7-form .contact-form-footer .wpcf7-submit:hover {
          box-shadow: 0 0px 20px rgba(84, 1, 74, 0.7);
          border-color: rgba(255, 6, 224, 0.61);
          background: linear-gradient(to right, rgba(255, 9, 9, 0.12941176470588237), #c000ffb5, rgba(255, 0, 94, 0.14));
          color: white;
        }

        img {
          border-style: none;
          height: auto;
          max-width: 100%;
          vertical-align: middle;
        }

        .widget_gallery a {
          display: inline-block;
        }

        .widget_gallery ul {
          padding-left: 0;
          display: table;
        }

        .widget_gallery li {
          display: inline-block;
          width: 33.33%;
          float: left;
          transition: all 0.5s;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          padding: 2px;
        }

        .widget_gallery.gallery-grid-4 li {
          width: 30%;
        }

        #waterdrop {
          height: 50px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
          border-radius: 0 0 10px 10px;
        }

        #waterdrop canvas {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 1;
        }

        /* Fallback animation if raindrops script fails */
        #waterdrop::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
          animation: shimmer 2s infinite;
          z-index: 0;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Multiple raindrop effects */
        #waterdrop::after {
          content: '';
          position: absolute;
          top: 20%;
          left: 20%;
          width: 3px;
          height: 3px;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
          animation: raindrop1 2s infinite;
          z-index: 0;
        }

        #waterdrop::before {
          content: '';
          position: absolute;
          top: 60%;
          left: 60%;
          width: 2px;
          height: 2px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          animation: raindrop2 1.8s infinite;
          z-index: 0;
        }

        @keyframes raindrop1 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(0, 20px) scale(1); opacity: 0.5; }
          100% { transform: translate(0, 40px) scale(2); opacity: 0; }
        }

        @keyframes raindrop2 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(0, 15px) scale(1); opacity: 0.5; }
          100% { transform: translate(0, 30px) scale(2); opacity: 0; }
        }

        .footer-site-info {
          padding-top: 10px;
        }

        /* Bootstrap grid classes */
        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }

        .col-lg-3, .col-md-12, .col-sm-12, .col-12, .col-lg-6, .col-md-6, .col-sm-6, .col-md-3, .col-md-5 {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
        }

        @media (min-width: 576px) {
          .col-sm-6 { flex: 0 0 50%; max-width: 50%; }
          .col-sm-12 { flex: 0 0 100%; max-width: 100%; }
        }

        @media (min-width: 768px) {
          .col-md-3 { flex: 0 0 25%; max-width: 25%; }
          .col-md-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
          .col-md-6 { flex: 0 0 50%; max-width: 50%; }
          .col-md-12 { flex: 0 0 100%; max-width: 100%; }
        }

        @media (min-width: 992px) {
          .col-lg-3 { flex: 0 0 25%; max-width: 25%; }
          .col-lg-6 { flex: 0 0 50%; max-width: 50%; }
        }

        .mt-2 {
          margin-top: 0.5rem;
        }

        .mt-4 {
          margin-top: 1rem;
        }
      `}</style>

      <div className="page-wrapper">
        <div id="waterdrop"></div>
        <footer>
          <div className="footer-top">
            <div className="pt-exebar"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 footer-col-3">
                  <div className="widget footer_widget">
                    <h5 className="footer-title">Address</h5>
                    <div className="gem-contacts">
                      <div className="gem-contacts-item gem-contacts-address">
                        Corporate Office :<br /> Doon House, B-275(A), First floor
                        Sector-57, Shushant Lok 3
                        Near Hong Kong Bazzar, Gurugram Pin 122001, Haryana.
                      </div>
                      <div className="gem-contacts-item gem-contacts-phone">
                        <i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="">+91-9122588799</a>
                      </div>

                      <div className="gem-contacts-item gem-contacts-address mt-2">
                        Reg. Office :<br /> Doon House, D2/3,
                        4th Floor, Chandra Tower, IDBI Bank Building
                        Dimna Road, Mango, Jamshedpur-831012, Jharkhand.
                      </div>
                      <div className="gem-contacts-item gem-contacts-phone">
                        <i className="fa fa-phone" aria-hidden="true"></i> Phone: <a>+91 9122588799</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                  <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="widget footer_widget">
                        <h5 className="footer-title">Latest Updates</h5>
                        <ul className="posts styled">
                          <li className="clearfix gem-pp-posts">
                            <div className="gem-pp-posts-text">
                              <div className="gem-pp-posts-item">
                                <a href="#">New AI Hairstyle Technology Launched</a>
                              </div>
                              <div className="gem-pp-posts-date">Experience virtual hair try-on</div>
                            </div>
                          </li>
                          <li className="clearfix gem-pp-posts">
                            <div className="gem-pp-posts-text">
                              <div className="gem-pp-posts-item">
                                <a href="#">Hundreds of New Hairstyles Added</a>
                              </div>
                              <div className="gem-pp-posts-date">From classic to trendy styles</div>
                            </div>
                          </li>
                          <li className="clearfix gem-pp-posts">
                            <div className="gem-pp-posts-text">
                              <div className="gem-pp-posts-item">
                                <a href="#">Mobile App Coming Soon</a>
                              </div>
                              <div className="gem-pp-posts-date">Try hairstyles on the go</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="widget">
                        <h5 className="footer-title">Email Us</h5>
                        <div className="textwidget">
                          <div role="form" className="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">
                            <form method="post" className="wpcf7-form" noValidate>
                              <div className="contact-form-footer">
                                <p>
                                  <span className="wpcf7-form-control-wrap your-first-name">
                                    <input type="text" name="your-first-name" defaultValue="" size={40} className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Your name" />
                                  </span>
                                </p>
                                <p>
                                  <span className="wpcf7-form-control-wrap your-email_1">
                                    <input type="email" name="your-email_1" defaultValue="" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" placeholder="Your email" />
                                  </span>
                                </p>
                                <p>
                                  <span className="wpcf7-form-control-wrap your-message">
                                    <textarea name="your-message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your message"></textarea>
                                  </span>
                                </p>
                                <div>
                                  <input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit" />
                                  <span className="ajax-loader"></span>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
                  <div className="widget widget_gallery gallery-grid-4">
                    <h5 className="footer-title">Our Gallery</h5>
                    <ul className="magnific-image">
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 1" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 2" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 3" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 4" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 5" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 6" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 7" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 8" /></a></li>
                      <li><a className="magnific-anchor"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Hairstyle 9" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-site-info">2024 © <a href="#" target="_blank">HeadZ AI Hairstyle Changer</a></div>
                </div>
                <div className="col-md-6">
                  <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                    <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                      <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26">
                        <Link href="/contact">Support</Link>
                      </li>
                      <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28">
                        <Link href="/about">Disclaimer</Link>
                      </li>
                      <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29">
                        <Link href="/wig-styler">Try Now</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-3">
                  <div id="footer-socials">
                    <div className="socials inline-inside socials-colored">
                      <a href="#" target="_blank" title="Facebook" className="socials-item">
                        <i className="fab fa-facebook-f facebook"></i>
                      </a>
                      <a href="#" target="_blank" title="Twitter" className="socials-item">
                        <i className="fab fa-twitter twitter"></i>
                      </a>
                      <a href="#" target="_blank" title="Instagram" className="socials-item">
                        <i className="fab fa-instagram instagram"></i>
                      </a>
                      <a href="#" target="_blank" title="YouTube" className="socials-item">
                        <i className="fab fa-youtube youtube"></i>
                      </a>
                      <a href="#" target="_blank" title="Telegram" className="socials-item">
                        <i className="fab fa-telegram telegram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
