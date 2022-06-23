import React from 'react'
import './Footer.scss'
import { PrimeIcons } from 'primereact/api';

function Footer() {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <h6>About</h6>
                        <p class="text-justify">One stop platform for all the stakeholders in the startup Ecosystem</p>
                    </div>

                    <div class="col-xs-3 col-md-2">
                        <h6>Connect</h6>
                        <ul class="footer-links">
                            <li><a href="http://scanfcode.com/about/">Startups</a></li>
                            <li><a href="http://scanfcode.com/contact/">Investors</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Accelerators</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Incubators</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-3 col-md-2">
                        <h6>Resources</h6>
                        <ul class="footer-links">
                            <li><a href="http://scanfcode.com/about/">Newsletter</a></li>
                            <li><a href="http://scanfcode.com/contact/">Blogs</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">YouTube Videos</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Podcasts</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-3 col-md-2">
                        <h6>Mentorships</h6>
                        <ul class="footer-links">
                            <li><a href="http://scanfcode.com/about/">Individual</a></li>
                            <li><a href="http://scanfcode.com/contact/">Community</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Expert Choice</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-3 col-md-2">
                        <h6>Mentorships</h6>
                        <ul class="footer-links">
                            <li><a href="http://scanfcode.com/about/">Individual</a></li>
                            <li><a href="http://scanfcode.com/contact/">Community</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Expert Choice</a></li>
                        </ul>
                    </div>



                </div>
                <hr/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                            <a href="#">StartDev</a>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i className="pi pi-instagram
"></i></a></li>
                            <li><a class="facebook" href="#"><i className="pi pi-linkedin"></i></a></li>
                            <li><a class="facebook" href="#"><i className="pi pi-twitter"></i></a></li>
                            <li><a class="facebook" href="#"><i className="pi pi-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer