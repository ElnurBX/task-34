import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
const Footer = () => {
    return (
        <footer className="footer_part">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Top Products</h4>
                            <ul className="list-unstyled">
                                <li><Link to={"/"}>Managed Website</Link></li>
                                <li><Link to={"/"}>Manage Reputation</Link></li>
                                <li><Link to={"/"}>Power Tools</Link></li>
                                <li><Link to={"/"}>Marketing Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><Link to={"/"}>Jobs</Link></li>
                                <li><Link to={"/"}>Brand Assets</Link></li>
                                <li><Link to={"/"}>Investor Relations</Link></li>
                                <li><Link to={"/"}>Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Features</h4>
                            <ul className="list-unstyled">
                                <li><Link to={"/"}>Jobs</Link></li>
                                <li><Link to={"/"}>Brand Assets</Link></li>
                                <li><Link to={"/"}>Investor Relations</Link></li>
                                <li><Link to={"/"}>Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Resources</h4>
                            <ul className="list-unstyled">
                                <li><Link to={"/"}>Guides</Link></li>
                                <li><Link to={"/"}>Research</Link></li>
                                <li><Link to={"/"}>Experts</Link></li>
                                <li><Link to={"/"}>Agencies</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="single_footer_part">
                            <h4>Newsletter</h4>
                            <p>Heaven fruitful doesn't over lesser in days. Appear creeping</p>
                            <div className="footer_input">
                                <form >
                                    <input type="email" name="EMAIL" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" />
                                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_part mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="copyright_text">
                                <p>
                                    Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <Link href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_icon social_icon">
                                <ul className="list-unstyled d-flex justify-content-center gap-4">
                                    <li><Link to={"/"} className="single_social_icon"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to={"/"} className="single_social_icon"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to={"/"} className="single_social_icon"><i className="fas fa-globe"></i></Link></li>
                                    <li><Link to={"/"} className="single_social_icon"><i className="fab fa-behance"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
